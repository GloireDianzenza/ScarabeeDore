import './App.css';
import "./css/tablet.css";
import "./css/mobile.css";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PageImage from "./images/depositphotos_56121605-stock-photo-female-managing-director-in-a.jpg";
import Image1 from "./Assets/Untitled_Message/freepik__pixel-art-8bits-a-black-woman-with-long-sandyblond__29703.jpeg";
import Image2 from "./Assets/Untitled_Message/freepik__adorable-cartoon-style-a-female-hiker-of-asian-des__304.jpeg";
import Image3 from "./Assets/Untitled_Message/freepik__3d-model-serene-cinematic-high-angle-forced-perspe__30240.jpeg";
import ImageIntro from "./Assets/Untitled_Message/freepik__rich-textured-brushstrokes-with-deep-colors-and-a-__41823.jpeg";
import {Icon} from "./components/index.ts";
import { useEffect, useState } from 'react';
import ApiCalendar from "react-google-calendar-api";
import { jwtDecode } from 'jwt-decode';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import Scarabee from "./Assets/ScarabeeDore.jpg";

const config = {
  clientId: "965666486369-9deuckjj3h7g4vr0f73mrk1vfv0trd4e.apps.googleusercontent.com",
  apiKey: "AIzaSyDpMyWw-it0g2Pei5Acl17Vj-xQKs1Ii7k",
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

const apiCalendar = new ApiCalendar(config);

/**
 * 
 * @param {string} email 
 * @returns {RegExpMatchArray | null}
 */
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function contactFunc(e){
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const entries = Object.fromEntries(formData.entries());
  let futureLink = "mailto:scarabee.dore21@gmail.com"
  let set = 0;
  if(entries.cc && set === 0){
    futureLink += "?cc=" + entries.cc;
    set++;
  }
  else if(entries.cc && set > 0){
    futureLink += "&cc=" + entries.cc;
    set++;
  }
  if(entries.subject && set === 0){
    futureLink += "?subject=" + entries.subject;
    set++;
  }
  else if(entries.subject && set > 0){
    futureLink += "&subject=" + entries.subject;
    set++;
  }
  if(entries.body && set === 0){
    futureLink += "?body=" + entries.body;
    set++;
  }
  else if(entries.body && set > 0){
    futureLink += "&body=" + entries.body;
    set++;
  }
  window.location = futureLink;
}

/**
 * 
 * @param {string} token 
 * @returns 
 */
export const tokenExpired = (token) =>{
  if(!token || token.trim() === "")return true;
  try{
    const decodeTk = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodeTk.exp < currentTime;
  }catch(error){
    console.error(error);
    return true;
  }
}

/**
 * 
 * @param  {...Object} objects 
 */
export const objectsEqual = (...objects) =>{
    for(const obj1 of objects){
      for(const obj2 of objects){
        if(obj1 === obj2)continue;
        const keys = Object.keys(obj1);
        for(const k of keys){
          if((!obj1[k] && obj1[k] !== 0 && obj1[k] !== "") || (!obj2[k] && obj2[k] !== 0 && obj2[k] !== "") || obj1[k] != obj2[k] || obj1[k] !== obj2[k]){
            return false;
          }
        }
      }
    }
    return true;
}

/**
 * 
 * @param {string} token 
 * @param {Object} user 
 */
export const correctUserToken = (token,user)=>{
      if(tokenExpired(token))return false;
      if(!user || !user.id)return false;
      if(!sessionStorage.getItem("token") || !sessionStorage.getItem("user"))return false;
      return token === sessionStorage.getItem("token") && objectsEqual(user,JSON.parse(sessionStorage.getItem("user")));
}

function SocialDiv(){
  return (
    <section className='socials'>
      <a href='https://www.facebook.com/scarabee.dore.3' id='facebook'>
        <i className='bx bxl-facebook-circle'></i>
      </a>
      <a href='https://www.instagram.com/scarabee.dore.21/' id='instagram'>
        <i className='bx bxl-instagram' ></i>
      </a>
      <a href='https://www.linkedin.com/in/sandra-duarte-732090256/?original_referer=' id='linkedin'>
        <i className='bx bxl-linkedin-square' ></i>
      </a>
      <a href='https://www.youtube.com/channel/UCilCmtLsTzdL6qkPMN2G2uA' id='youtube'>
        <i className='bx bxl-youtube' ></i>
      </a>
      <a href='https://twitter.com/scarabeedore22' id='twitter'>
        <i className='bx bxl-twitter' ></i>
      </a>
      <a href='https://www.tiktok.com/foryou?is_copy_url=1&is_from_webapp=v1' id='tiktok'>
        <i className='bx bxl-tiktok' ></i>
      </a>
      <a href='mailto:scarabee.dore21@gmail.com' id='mailLink' className='mailLink'>
        <i className='bx bx-envelope' ></i>
      </a>
      <a href='tel:0760231984' className='mailLink'>
        <i className='bx bx-phone' ></i>
      </a>
    </section>
  )
}


function MeetingForm({meetingDate,setDate,meetingHour,meetingMinute,setHour,setMinute}){

  const [lastName,setLastName] = useState("");
  const [firstName,setFirstName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [signedIn,setSignedIn] = useState(false);

  /**
   * 
   * @param {Event} evt 
   */
  const lastNameChange = (evt) => {
    setLastName(evt.target.value)
  }
  
  const firstNameChange = (evt) => {
    setFirstName(evt.target.value)
  }
  
  const emailChange = (evt) => {
    if(validateEmail(evt.target.value) !== null){
      setEmail(evt.target.value)
    }
  }
  
  const phoneChange = (evt) => {
    if([10,12].includes(evt.target.value.length)){
      setPhone(evt.target.value)
    }
  }

  /**
   * 
   * @param {import('react').BaseSyntheticEvent} event 
   */
  function MeetingSubmit(event){
    event.preventDefault();
    if(signedIn){
      alert("Vous êtes déjà connecté à un compte.");
      return;
    }
    if(lastName.trim() !== "" && firstName.trim() !== "" && email.trim() !== "" && phone.trim() !== ""){
        const user = {nom:lastName,prenom:firstName,email:email,telephone:phone};
        try{
          fetch("http://localhost:8080/api/users/user/login",{
            method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(user)
          })
          .then(response=>response.json())
          .then(async data=>{
              if(data.error){
                alert(JSON.stringify(data));
                return;
              }
              let request = await fetch("http://localhost:8080/api/users/"+data.id);
              const currentUser = await request.json();

              request = await fetch("http://localhost:8080/api/users",{
                method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(currentUser)
              });
              const tokenObj = await request.json();
              sessionStorage.setItem("user",JSON.stringify(tokenObj.user));
              sessionStorage.setItem("token",tokenObj.token);
              if(!tokenObj.user || !tokenObj.token){
                sessionStorage.setItem("user",null);
                sessionStorage.setItem("token","");
              }
              if(correctUserToken(tokenObj.token,tokenObj.user)){
                  apiCalendar.handleAuthClick()
                  .then(data=>{
                      setSignedIn(true);
                  })
                  .catch(error=>{
                    console.error(error);
                  })
              }
          })
        }catch(error){
          alert(error);
          console.error(error);
        }
    }
  }

  function createEvent(){
      const newEvent = {
        summary:"Rendez-vous avec Sandra de Scarabée Dorée",
        start:{timeZone:"Europe/Paris",dateTime:meetingDate.toISOString()},
        end:{timeZone:"Europe/Paris",dateTime:new Date(meetingDate.getTime()+3600000).toISOString()}
      }
      
      apiCalendar.createEvent(newEvent).then(data=>{
          alert("Rendez-vous fixé à la date: "+meetingDate.toLocaleDateString());
      }).catch(error=>{
        console.error(error);
        alert("Le rendez-vous n'a pas pu être fixé: "+error);
      })
  }

  function logout(){
      apiCalendar.handleSignoutClick();
      setSignedIn(false);

      document.getElementById("nom2").value = "";
      document.getElementById("prenom").value = "";
      document.getElementById("mail2").value = "";
      document.getElementById("phone").value = "";
      sessionStorage.clear();
  }

  return (
    <Form className='meeting-form' onSubmit={MeetingSubmit}>
      <Form.Group controlId='nom2'>
        <Form.Label>Nom</Form.Label>
        <Form.Control type='text' placeholder='Nom...' required name='nom2' onChange={lastNameChange}></Form.Control>
      </Form.Group>
      <Form.Group controlId='prenom'>
        <Form.Label>Prénom</Form.Label>
        <Form.Control type='text' placeholder='Prénom...' required name='prenom' onChange={firstNameChange}></Form.Control>
      </Form.Group>
      <Form.Group controlId='mail2'>
        <Form.Label>Adresse email</Form.Label>
        <Form.Control type='email' placeholder='Adresse email...' required name='mail2' onChange={emailChange}></Form.Control>
      </Form.Group>
      <Form.Group controlId='phone'>
        <Form.Label>Téléphone</Form.Label>
        <Form.Control type='tel' placeholder='Numéro...' name='phone' minLength={10} maxLength={12} onChange={phoneChange}></Form.Control>
      </Form.Group>
      <Link to={"/inscription"}><Button type='button' variant='link'>Pas de compte ?</Button></Link>
      {signedIn && <><DatePicker showTimeInput selected={meetingDate} onChange={(date,event)=>{
        const newDate = date;
        newDate.setHours(date.getHours(),date.getMinutes(),0);
        setHour(newDate.getHours());
        setMinute(newDate.getMinutes());
        setDate(newDate)}
      } dateFormat={"dd/MM/yyyy"}/>
        {/* <HourPicker hour={meetingHour} minute={meetingMinute} setHour={setHour} setMinute={setMinute}/> */}
      </>}
      {signedIn && <Button type='button' onClick={createEvent}>Confirmer rendez-vous</Button>}
      {signedIn && <Button type='button' onClick={logout}>Se déconnecter</Button>}
      {!signedIn && <Button type='submit' variant='primary'>Se connecter</Button>}
    </Form>
  )
}

function MeetingModalFunction(){
  document.querySelector(".modal").classList.add("show-modal");
}

function CloseModalFunction(){
  document.querySelector(".modal").classList.remove("show-modal");
}

function RendezVousModal({meetingDate,setDate,meetingHour,setHour,meetingMinute,setMinute}){
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='close-modal' onClick={CloseModalFunction}>
          <Icon name='bxs-x-circle' size='40px'></Icon>
        </div>
        <div>
          <h2>Pour obtenir un rendez-vous, vous devez avoir un compte</h2>
        </div>
        <MeetingForm meetingDate={meetingDate} setDate={setDate} meetingHour={meetingHour} setHour={setHour} meetingMinute={meetingMinute} setMinute={setMinute}/>
      </div>
    </div>
  )
}

function FooterComponent(){
  return (
    <footer>
      <div className='left'>
        <Link to={"/qui"}><Button variant='link'>Qui suis-je ?</Button></Link>
        <Link to={"/avis"}><Button variant='link'>Avis des clients</Button></Link>
        <a href='#top'><Button variant='link'>A propos</Button></a>
      </div>
      <div className='middle'>
        <Link to={"/formation"}><Button variant='link'>Formation</Button></Link>
        <Link to={"/blog"}><Button variant='link'>Blog</Button></Link>
        <Link to={"/rgpd"}><Button variant='link'>RGPD</Button></Link>
      </div>
      <div className='right'>
        <a href='https://gloiredianzenza.github.io/portfolio/'>Webmaster</a>
        <Link to={"/cookies"}><Button variant='link'>Paramètres de cookies</Button></Link>
      </div>
    </footer>
  )
}

function ToggleForm(){
  document.querySelector("#formManager > div").classList.toggle("hidden-form");
  document.getElementById("formToggler").classList.toggle("show");
}

function ContactForm(){
  return (
    <Form method='POST' action='mailto:scarabee.dore21@gmail.com' encType='text/plain' onSubmit={contactFunc}>
      <Form.Group controlId='nom'>
        <Form.Label>Nom</Form.Label>
        <Form.Control type='text' placeholder='Insérer nom...' required name='nom'></Form.Control>
      </Form.Group>
      <Form.Group controlId='mail'>
        <Form.Label>Adresse email</Form.Label>
        <Form.Control type='email' placeholder='Insérer email...' required name='cc'></Form.Control>
      </Form.Group>
      <Form.Group controlId='sujet'>
        <Form.Label>Sujet</Form.Label>
        <Form.Control type='text' placeholder='Définir sujet...' required name='subject'></Form.Control>
      </Form.Group>
      <Form.Group controlId='message' id='msgGroup'>
        <Form.Label>Message</Form.Label>
        <Form.Control as={"textarea"} rows={8} placeholder='...' required name='body'></Form.Control>
      </Form.Group>
      <Button type='submit' variant='primary' className='buttons'>Envoyer</Button>
    </Form>
  )
}

function BootstrapJS(){
  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" defer={true}></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
    </>
  );
}

function HeaderList(){
  return (
    <ListGroup as={"ul"}>
      <ListGroup.Item as={"li"} active={true}><Button variant='link' href='#top'>Accueil</Button></ListGroup.Item>
      <ListGroup.Item as={"li"} id='apropos'>
        <Button variant='link'>A propos...</Button>
        <ListGroup as={"ul"} className='submenu'>
          <ListGroup.Item as={"li"}><Link to={"/qui"}><Button variant='link'>Qui suis-je ?</Button></Link></ListGroup.Item>
          <ListGroup.Item as={"li"}><Link to={"/bureau"}><Button variant='link'>Formules de coaching</Button></Link></ListGroup.Item>
        </ListGroup>
      </ListGroup.Item>
      <ListGroup.Item as={"li"}><Link to={"/formation"}><Button variant='link'>Formation</Button></Link></ListGroup.Item>
      <ListGroup.Item as={"li"}><Button variant='link' href='#formManager'>Contactez-nous</Button></ListGroup.Item>
    </ListGroup>
  )
}

function App() {

  const [meetingDate,setMeetingDate] = useState(new Date());
  const [meetingHour,setMeetingHour] = useState(9);
  const [meetingMinute,setMeetingMinute] = useState(0);
  
  useEffect(()=>{
    sessionStorage.clear();
  },[])

  return (
    <div className="main App">
      <div id='top'></div>
      <header>
        <div className='HeaderTop'>
          <h1>Scarabée Doré</h1>
          <img src={Scarabee} alt='scarabée'/>
        </div>
        <div className='HeaderBottom'>
          <HeaderList/>
        </div>
      </header>
      <main>
        <section id='mainPart'>
          <div className='left'>
            <h2 className='main-title'>« Apprendre à accepter ne veut pas dire se résigner mais simplement ne pas perdre d'énergie dans des situations qui ne peuvent pas être changées ». Dalai Lama</h2>
            <Button variant='secondary buttons' id='seanceBtn' onClick={MeetingModalFunction}>Prendre rendez-vous</Button>
          </div>
          <div className='right'>
            <img src={ImageIntro} alt=''></img>
          </div>
        </section>
        <section id='processes'>
          {/* <div className='step'>
            <div className='left'>
              <h3>Comment se passe une séance ?</h3>
              <span>Lors de la première séance, nous définiront ensemble le où les objectifs à atteindre, les besoins en coaching. <br></br>Pour cela, je poserai des questions afin de vous aider à clarifier vos pensées et à identifier vos blocages. Lors des séances, je prendrai en compte tous les paramètres (votre personnalité, situation personnelle et professionnelle, vos objectifs, vos blocages...) afin de mieux vous aider à trouver vos propres réponses et solutions.</span>
            </div>
            <div className='right'>
              <img src={GridImage} alt=''></img>
            </div>
          </div> */}
          <div className='step'>
            <div className='left'>
              <h3>Qu'est-ce qu'un coach en développement personnel et professionnel ? </h3>
              <span>Un coach en développement personnel est une personne qui aide les autres à mieux se connaître et à atteindre leurs objectifs. Cela peut sembler un peu flou au début, mais imaginez un guide qui vous accompagne dans un voyage important de votre vie. Ce voyage pourrait être sur le plan émotionnel, professionnel ou même physique. Le coach pose des questions pour vous aider à réfléchir à ce que vous voulez vraiment pourquoi c'est important pour vous. Grâce à ces discussions, vous pouvez découvrir vos passions cachées, travailler sur vos peurs ou développer des compétences que vous n'aviez jamais envisagées auparavant.
En fin de compte, avoir un coach en développement personnel, c'est comme avoir un ami bienveillant qui veut vous voir réussir. Ils ne prennent pas les décisions pour vous, mais ils vous encouragent et vous donnent des outils pour avancer. Parfois, nous avons besoin d'un petit coup de pouce pour croire en nous-mêmes et comprendre nos capacités. Un bon coach sait écouter, poser les bonnes questions et créer un environnement sûr où l'on peut s'exprimer sans jugement. En travaillant ensemble, on peut transformer des rêves vagues en réalités tangibles.
</span>
            </div>
          </div>
          <div className='step'>
            <div className='right'>
              <img src={Image1} alt=''></img>
            </div>
            <div className='left'>
              <h3>Quelle est la différence entre un thérapeute et un coach en développement personnel et professionnel ? </h3>
              <span>Le thérapeute est un professionnel ayant un master en psychologie (après une licence du même domaine) ou en psychanalyse et ayant suivi une formation en psychopathologie clinique où un doctorat de médecine avec une spécialité en psychiatrie.  Il soigne les blessures du passé. <br/><br/>
Concernant les coachs, pour exercer en France, il n’est pas obligatoire de suivre une formation ni d’obtenir un diplôme ou une certification. Le coach intervient sur des problèmes concrets (relationnel, reconversion professionnelle, confiance en soi….), qui ont été définis avec le client au préalable lors du premier entretien.  Le coach de vie ne diagnostique pas ni ne soigne les maladies mentales
</span>
            </div>
          </div>
          <div className='step'>
            <div className='right'>
              <img src={Image2} alt=''></img>
            </div>
            <div className='left'>
              <h3>En quoi puis-je vous aider?</h3>
              <span>
              Je peux vous aider à identifier (vos forces, vos axes d’amélioration), ainsi que tout ce qui vous empêche d’obtenir ce que vous voulez,  de créer un plan d’action vous permettant d’élaborer des stratégies (plan A, plan B…), de retrouver l’énergie positive vous permettant d’avancer et ainsi d’atteindre votre objectif qu’on aura défini lors de notre premier entretien (via téléphone ou en visio). <br/><br/>
Vous pouvez solliciter mon aide : 
              <ul>
                <li>Lors des moments délicats de votre vie (rupture, divorce, deuil, séparation, licenciement, changement de travail, de lieu de vie)</li>
<li>Lors d’un bocage et que vous avez besoin d’y voir plus clair</li>
<li>Pour retrouver la confiance en vous</li>
<li>À mieux gérer vos émotions personnelles (conflit avec votre partenaire, collègue, famille, amis, stress)</li>
	<li>Une reconversion professionnelle (je vous aide à analyser la situation et à passer à l’action)</li>
	<li>Surmonter les difficultés (stress, les épreuves médicales, motivation…) liées aux problèmes de santé</li>
	<li>Lors du protocole FIV : Je vous aide à prendre du recul (le protocole peut être vécu comme extrêmement stressant, vous aurez besoin de prise de recul pour mieux vivre cette aventure qui vous permettra je vous le souhaite d’avoir un beau bébé en bonne santé)</li>
              </ul>

              </span>
            </div>
          </div>
          <div className='step'>
            <div className='right'>
              <img src={Image3} alt=''></img>
            </div>
            <div className='left'>
              <h3>Ma philosophie et mes valeurs</h3>
              <span>« Si on veut obtenir quelque chose que l'on n'a jamais eu, il faut tenter quelque chose que l'on n'a jamais fait. » Périclès. <br/><br/>
Parfois, nous avons besoin d'une personne extérieure pour nous aider à acquérir la perspective nécessaire pour atteindre nos objectifs. Tout au long de ma vie, j'ai toujours pris le temps de bien analyser ma situation, en pesant le pour et le contre de mes choix. Chaque décision que nous prenons aura des impacts positifs et négatifs sur nos vies. Par conséquent, il est crucial de considérer tous les aspects et de choisir l'option qui semble offrir plus d'avantages que d'inconvénients, et surtout, de s'en tenir à cette décision. <br/><br/>
La vie est remplie de défis et d'obstacles qui peuvent parfois sembler imbattables. Cependant, il est important de se rappeler que chaque épreuve est une occasion de croissance et de renforcement personnel. La résilience humaine est incroyablement puissante, et même dans les moments les plus sombres, nous avons des ressources internes et externes sur lesquelles nous pouvons compter. Le soutien de ses proches, la recherche de solutions créatives et la capacité d'apprendre de chaque expérience sont autant d'outils qui nous aident à surmonter les difficultés. En relevant chaque défi avec courage et détermination, nous découvrons souvent que nous sommes capables de plus que nous ne l'aurions jamais cru possible. <br/><br/>

Je suis une personne empathique, honnête, digne de confiance et je m'adapte aux personnes et aux situations, avec un esprit ouvert.
</span>
            </div>
          </div>
        </section>
        <section id='formManager'>
          <Button variant='primary' className='buttons' id='formToggler' onClick={ToggleForm}>Formulaire de contact</Button>
          <div className='hidden-form'>
            <ContactForm/>
          </div>
        </section>
        <RendezVousModal meetingDate={meetingDate} setDate={setMeetingDate} meetingHour={meetingHour} setHour={setMeetingHour} meetingMinute={meetingMinute} setMinute={setMeetingMinute}/>
        <SocialDiv/>
      </main>
      <FooterComponent/>
      <BootstrapJS/>
    </div>
  );
}

export default App;
