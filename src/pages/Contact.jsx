import React, { useEffect, useState } from 'react';
import { ListGroup,Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Scarabee from "../Assets/scarabée doré or et bleu-Photoroom.jpg";
import "../css/contact.css";

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
                <Form>
                    <h2>Vous devez vous identifiez pour pouvoir laisser un avis</h2>
                    <Form.Group controlId='nom'>
                      <Form.Label>Nom</Form.Label>
                      <Form.Control name='nom' placeholder='Nom'/>
                    </Form.Group>
                </Form>
            </main>
            <FooterComponent/>
    </div>);
}

export default Contact;