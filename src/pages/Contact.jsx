import React, { useEffect, useState } from 'react';
import { ListGroup,Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Scarabee from "../Assets/logo définitif2.png";
import "../css/contact.css";
import emailjs from "@emailjs/browser";
import ApiCalendar from "react-google-calendar-api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const config = {
  clientId: "965666486369-9deuckjj3h7g4vr0f73mrk1vfv0trd4e.apps.googleusercontent.com",
  apiKey: "AIzaSyDpMyWw-it0g2Pei5Acl17Vj-xQKs1Ii7k",
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

const apiCalendar = new ApiCalendar(config);

function Contact() {

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
            <ListGroup.Item as={"li"}><Button variant='link' href='#top'>Contactez-nous</Button></ListGroup.Item>
          </ListGroup>
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
              <a href='https://gloiredianzenza.github.io/portfolio/' target='_blank' rel='noreferrer'>Webmaster</a>
              <Link to={"/cookies"}><Button variant='link'>Paramètres de cookies</Button></Link>
            </div>
          </footer>
        )
      }

    useEffect(()=>{
      emailjs.init({publicKey:"SSiXGzf6UUP-YqBH8"});
    },[])

    /**
     * 
     * @param {import('react').BaseSyntheticEvent} event 
     */
    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const entries = Object.fromEntries(formData.entries());
        if(entries.consent || entries.consent === "on"){
            emailjs.send("service_vh72w4k","template_s6d9i0s",{
              from_name:entries.prenom+" "+entries.nom,to_name:"Sandra Duarte",subject:"Contact clientèle",message:entries.message
            })
            .then(status=>{
              if(status.text === "0K" || status.status === 200)alert("Email envoyé avec succès !");
              else throw status;
            })
            .catch(error=>console.error(error));
        }
    }

    function MeetingForm(){

      const [date,setDate] = useState(new Date());
      const [hour,setHour] = useState(9);
      const [minute,setMinute] = useState(0);

      /**
       * 
       * @param {import('react').BaseSyntheticEvent} event 
       */
      function meetingSubmit(event){
          event.preventDefault();
          const formData = new FormData(event.target);
          const entries = Object.fromEntries(formData.entries());
          apiCalendar.handleAuthClick().then(()=>{
            date.setHours(hour+1);
            date.setMinutes(minute);
            const newEvent = {
              summary:"Rendez-vous avec Sandra Duarte de Scarabée Dorée",
              start:{timeZone:"Europe/Paris",dateTime:date.toISOString()},
              end:{timeZone:"Europe/Paris",dateTime:new Date(date.getTime()+(1000*(60*15))).toISOString()}
            }
            
            apiCalendar.createEvent(newEvent)
            .then(data=>{
                console.log(data);
                emailjs.send("service_vh72w4k","template_s6d9i0s",{to_name:"Sandra Duarte",from_name:entries.prenom+" "+entries.nom,subject:"Demande de rendez-vous",message:entries.message})
                .then(status=>{
                  if(status.text === "OK"){
                    console.log("Success");
                    alert("Rendez-vous fixé à la date: "+date.toLocaleDateString());
                  }
                })
                .catch(error=>{
                  throw error;
                })
            })
            .catch(error=>{
              console.error(error);
              alert("Le rendez-vous n'a pas pu être fixé: "+error);
            })
          }).catch(error=>console.error(error));
      }

      useEffect(()=>{
        const newDate = date;
        newDate.setHours(hour);
        newDate.setMinutes(minute);
        setDate(newDate);
      },[])

      return (
        <Form onSubmit={meetingSubmit} className='meeting-form'>
            <Form.Group controlId='nom2'>
                <Form.Label>Nom</Form.Label>
                <Form.Control name='nom' placeholder='Nom' required/>
            </Form.Group>
            <Form.Group controlId='prenom2'>
                <Form.Label>Prénom</Form.Label>
                <Form.Control name='prenom' placeholder='Prénom' required/>
            </Form.Group>
            <Form.Group controlId='phone2'>
                <Form.Label>Numéro de téléphone</Form.Label>
                <Form.Control name='phone' placeholder='Téléphone'/>
            </Form.Group>
            <Form.Group controlId='motif' className='textarea-group'>
                <Form.Label>Motif du rendez-vous</Form.Label>
                <Form.Control as={"textarea"} name='motif' placeholder='Motif' required/>
            </Form.Group>
            <Form.Group controlId='date' className='textarea-group'>
                <Form.Label>Calendrier</Form.Label>
                <DatePicker required showTimeInput dateFormat={"dd/MM/yyyy"} selected={date} onChange={(dte,event)=>{
                  setHour(dte.getHours());
                  setMinute(dte.getMinutes());
                  setDate(dte);
                }}/>
            </Form.Group>
            <Button type='submit'>Demander rendez-vous</Button>
        </Form>
      )
    }
    
    return (<div className='contact App'>
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
                <h1 className='mb-4'>Contactez-moi</h1>
                <Form onSubmit={handleSubmit}>
                    <span className=''>Vous pouvez me joindre pour une prise de rendez-vous ou pour toute question.</span>
                    <span>Téléphone: <a href="tel:0760231984">07.60.23.19.84</a></span>
                    <Form.Group controlId='nom'>
                      <Form.Label>Nom *</Form.Label>
                      <Form.Control name='nom' placeholder='Nom' required/>
                    </Form.Group>
                    <Form.Group controlId='prenom'>
                      <Form.Label>Prénom *</Form.Label>
                      <Form.Control name='prenom' placeholder='Prénom' required/>
                    </Form.Group>
                    <Form.Group controlId='email'>
                      <Form.Label>Email *</Form.Label>
                      <Form.Control name='email' type='email' required placeholder='Adresse email'/>
                    </Form.Group>
                    <Form.Group controlId='phone'>
                      <Form.Label>Numéro de téléphone</Form.Label>
                      <Form.Control name='phone' type='tel' required placeholder='Téléphone'/>
                    </Form.Group>
                    <Form.Group controlId='message' className='textarea-group'>
                      <Form.Label>Message *</Form.Label>
                      <Form.Control as={"textarea"} name='message' required placeholder='Message'/>
                    </Form.Group>
                    <h3>Accord RGPD *</h3>
                    <Form.Group controlId='consent'>
                        <Form.Check type='checkbox' required name='consent' label={"En utilisant ce formulaire de contact, vous consentez à la collecte et au traitement des informations que vous fournissez, telles que votre nom, votre adresse e-mail et tout autre détail que vous choisissez de partager avec nous. Ces informations sont collectées dans le seul but de répondre à votre demande et de fournir un service clientèle de qualité. Vos données ne seront pas utilisées à d’autres fins sans votre consentement explicite. Pour plus d’information sur la manière dont nous traitons vos données personnelles, veuillez consulter notre politique de confidentialité."}/>
                    </Form.Group>
                    <span>* Obligatoire</span>
                    <Button type='submit'>Envoyer</Button>
                    <br /><br />
                </Form>
                <span>Réservez votre séance découverte gratuite ! <br/> Vous souhaitez atteindre vos objectifs personnels ou professionnels ? <br/> Profitez d'un <b>rendez-vous gratuit de 15 minutes</b> avec moi, Sandra DUARTE, coach certifiée. <br/>Lors de cette séance, nous discuterons de vos aspirations, évaluerons vos besoins et je vous donnerai des conseils pratiques pour avancer. <br/> 👉 Réservez dès maintenant en remplissant le formulaire ci-dessous ! </span>
                <MeetingForm/>
            </main>
            <FooterComponent/>
    </div>);
}

export default Contact;