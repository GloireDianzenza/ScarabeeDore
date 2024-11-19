import React, { useEffect } from 'react';
import { ListGroup,Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Scarabee from "../Assets/logo définitif2.png";
import "../css/contact.css";
import emailjs from "@emailjs/browser";

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
            window.location = "mailto:scarabeedore21@gmail.com?subject=Contact%20Scarabée%20Doré&body="+entries.message;
        }
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
                      <Form.Label>Nom</Form.Label>
                      <Form.Control name='nom' placeholder='Nom'/>
                    </Form.Group>
                    <Form.Group controlId='prenom'>
                      <Form.Label>Prénom</Form.Label>
                      <Form.Control name='prenom' placeholder='Prénom'/>
                    </Form.Group>
                    <Form.Group controlId='email'>
                      <Form.Label>Email *</Form.Label>
                      <Form.Control name='email' type='email' required placeholder='Adresse email'/>
                    </Form.Group>
                    <Form.Group controlId='message' className='textarea-group'>
                      <Form.Label>Message *</Form.Label>
                      <Form.Control as={"textarea"} name='message' required placeholder='Message'/>
                    </Form.Group>
                    <h3>Accord RGPD</h3>
                    <Form.Group controlId='consent'>
                        <Form.Check type='checkbox' required name='consent' label={"En utilisant ce formulaire de contact, vous consentez à la collecte et au traitement des informations que vous fournissez, telles que votre nom, votre adresse e-mail et tout autre détail que vous choisissez de partager avec nous. Ces informations sont collectées dans le seul but de répondre à votre demande et de fournir un service clientèle de qualité. Vos données ne seront pas utilisées à d’autres fins sans votre consentement explicite. Pour plus d’information sur la manière dont nous traitons vos données personnelles, veuillez consulter notre politique de confidentialité."}/>
                    </Form.Group>
                    <span>* Obligatoire</span>
                    <Button type='submit'>Envoyer</Button>
                </Form>
            </main>
            <FooterComponent/>
    </div>);
}

export default Contact;