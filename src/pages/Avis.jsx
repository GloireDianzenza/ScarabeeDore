import React, { useEffect, useState } from 'react';
import { ListGroup,Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import AvisComponent from '../components/AvisComponent'
import {correctUserToken} from "../App";
import RangeSlider from 'react-bootstrap-range-slider';
import Scarabee from "../Assets/scarabée doré or et bleu-Photoroom.jpg";

function Avis() {

    const [reviewList,setReviewList] = useState([{id:0,contenu:"",UserId:0,user:{id:0,nom:"",prenom:"",email:"",telephone:"",employee:0},etoiles:0}]);
    const [signedIn,setSignedIn] = useState(false);
    const [loggedUser,setUser] = useState({});

    const [content,setContent] = useState("");
    const [stars,setStars] = useState(2);
    const navigate = useNavigate();

    function HeaderList(){
        return (
          <ListGroup as={"ul"}>
            <ListGroup.Item as={"li"} active={true}><Link to={"/#top"}><Button variant='link'>Accueil</Button></Link></ListGroup.Item>
            <ListGroup.Item as={"li"} id='apropos'>
              <Button variant='link'>A propos...</Button>
              <ListGroup as={"ul"} className='submenu'>
                <ListGroup.Item as={"li"}><Link to={"/qui"}><Button variant='link'>Qui suis-je ?</Button></Link></ListGroup.Item>
                <ListGroup.Item as={"li"}><Link to={"/bureau"}><Button variant='link'>Formules de coaching</Button></Link></ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item as={"li"}><Link to={"/formation"}><Button variant='link'>Formation</Button></Link></ListGroup.Item>
            <ListGroup.Item as={"li"}><Link to={"/contact"}><Button variant='link'>Contactez-nous</Button></Link></ListGroup.Item>
          </ListGroup>
        )
    }

    function FooterComponent(){
        return (
          <footer>
            <div className='left'>
              <Link to={"/qui"}><Button variant='link'>Qui suis-je ?</Button></Link>
              <Button variant='link' href='#top'>Avis des clients</Button>
              <a href='#top'><Button variant='link'>A propos</Button></a>
            </div>
            <div className='middle'>
              <Link to={"/formation"}><Button variant='link'>Formation</Button></Link>
              <Link to={"/blog"}><Button variant='link'>Blog</Button></Link>
              <Link to={"/rgpd"}><Button variant='link'>RGPD</Button></Link>
            </div>
            <div className='right'>
              <a href='https://gloiredianzenza.github.io/portfolio/' target='_blank' rel='noreferrer'>Webmaster</a>
              <Link to={"/cookies"}><Button variant='link'>Paramètres de cookies</Button></Link>
            </div>
          </footer>
        )
      }

    useEffect(()=>{
        async function getAvis() {
            try {
                let request = await fetch("http://localhost:8080/api/avis");
                const avis = await request.json();
                if(avis.error)throw avis;
                setReviewList(avis);

            } catch (error) {
              console.error(error);
              navigate("/");
            }
        }
        getAvis();
    },[])

    /**
     * 
     * @param {import('react').BaseSyntheticEvent} event 
     */
    function login(event){
      event.preventDefault();
      const formData = new FormData(event.target);
      const entries = Object.fromEntries(formData.entries());
      
      if(signedIn)return;
        try{
          fetch("http://localhost:8080/api/users/user/login",{
            method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(entries)
          })
          .then(response=>response.json())
          .then(async data=>{
              if(data.error){
                alert(JSON.stringify(data));
                return;
              }
              if(!data || data.id <= 0)throw data;
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
                  setSignedIn(true);
                  setUser(tokenObj.user);
              }
          })
        }catch(error){
          alert(error);
          console.error(error);
        }
    }

    function submitReview(){
        const newAvis = {UserId:loggedUser.id,contenu:content,etoiles:parseInt(stars)};

        async function addNewAvis(data) {
            try {
              let request = await fetch("http://localhost:8080/api/avis",{
                method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)
              })
              const result = await request.json();
              if(result.error)throw result;
              alert("Avis envoyé avec succès");
              window.location.reload();
            } catch (error) {
                console.error(error);
                if(error.error.errors){
                  if(error.error.errors[0].message === "UserId must be unique"){
                    alert("Un avis par utilisateur !")
                  }
                  else{
                    alert(error.error.errors[0].message);
                  }
                }
                else{
                  alert(JSON.stringify(error));
                }
            }
        }
        addNewAvis(newAvis)
    }

    function logout(){
      setSignedIn(false);
      document.getElementById("nom").value = "";
      document.getElementById("prenom").value = "";
      document.getElementById("mail").value = "";
      document.getElementById("phone").value = "";
    }

    // useEffect(()=>{
    //     reviewList.forEach((val)=>{
    //         if(!val.user || val.user == undefined){
    //           fetch("http://localhost:8080/api/users/"+val.UserId)
    //           .then(response=>response.json())
    //           .then(data=>{
    //             val.user = data;
    //           })
    //         }
    //     })
    // },[reviewList])

    return (<div className='avis App'>
            <div id='top'></div>
            <header>
            <div className='HeaderTop'>
           
          <img src={Scarabee} alt='scarabée'/>
        </div>
                <div className='HeaderBottom'>
                <HeaderList/>
                </div>
            </header>
            <main>
                <h1 className='mb-4'>Avis des clients</h1>
                <div className="avis-list">
                   {reviewList.length >= 1 && reviewList.map((val,idx)=><AvisComponent key={idx} value={val}/>)}
                </div>
                <h2>Laisser un avis</h2>
                <Form onSubmit={login}>
                  <strong>Vous devez vous identifiez pour pouvoir laisser un avis</strong>
                  <Form.Group controlId='nom'>
                    <Form.Label>Nom *</Form.Label>
                    <Form.Control type='text' placeholder='Nom...' required name='nom'></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='prenom'>
                    <Form.Label>Prénom *</Form.Label>
                    <Form.Control type='text' placeholder='Prénom...' required name='prenom'></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='mail'>
                    <Form.Label>Adresse email *</Form.Label>
                    <Form.Control type='email' placeholder='Adresse email...' required name='email'></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='phone'>
                    <Form.Label>Téléphone</Form.Label>
                    <Form.Control type='tel' placeholder='Numéro...' name='telephone' minLength={10} maxLength={12}></Form.Control>
                  </Form.Group>
                 {signedIn && <Form.Group controlId='contenu'>
                    <Form.Control as={"textarea"} name='contenu' value={content} onChange={(e)=>setContent(e.target.value)} required></Form.Control>
                  </Form.Group>}
                  {signedIn && <Form.Group controlId='etoiles'>
                        <RangeSlider name="etoiles" min={0} max={5} tooltip='off' value={stars} onChange={(e)=>setStars(e.target.value)}/>
                    </Form.Group>}{signedIn && <strong>{stars}</strong>}
                  {!signedIn && <Link to={"/inscription"}><Button type='button' variant='link'>Créer un compte</Button></Link>}
                  {!signedIn && <Button type='submit' variant='primary'>Se connecter</Button>}
                  {signedIn && <Button type='button' variant='primary' onClick={submitReview}>Laisser avis</Button>}
                  {signedIn && <Button type='button' variant='primary' onClick={logout}>Se déconnecter</Button>}
                  <p>* Obligatoire</p>
                </Form>
            </main>
            <FooterComponent/>
    </div>);
}

export default Avis;