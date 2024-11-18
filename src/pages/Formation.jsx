import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../css/formation.css";
import { Icon } from '../components/index.ts';
import Scarabee from "../Assets/scarabée doré or et bleu-Photoroom.jpg";

function Formation() {

    function HeaderList(){
        return (
          <ListGroup as={"ul"}>
            <ListGroup.Item as={"li"}><Link to={"/#top"}><Button variant='link'>Accueil</Button></Link></ListGroup.Item>
            <ListGroup.Item as={"li"} id='apropos'>
              <Button variant='link'>A propos...</Button>
              <ListGroup as={"ul"} className='submenu'>
                <ListGroup.Item as={"li"}><Link to={"/qui"}><Button variant='link'>Qui suis-je ?</Button></Link></ListGroup.Item>
                <ListGroup.Item as={"li"}><Link to={"/bureau"}><Button variant='link'>Formules de coaching</Button></Link></ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item as={"li"} active={true}><Button variant='link' href='#top'>Formation</Button></ListGroup.Item>
            <ListGroup.Item as={"li"}><Link to={"/#formManager"}><Button variant='link'>Contactez-nous</Button></Link></ListGroup.Item>
          </ListGroup>
        )
    }

    function FooterComponent(){
        return (
          <footer>
            <div className='left'>
              <Link to={"/qui"}><Button variant='link'>Entreprise</Button></Link>
              <Link to={"/avis"}><Button variant='link'>Avis des clients</Button></Link>
              <a href='#top'><Button variant='link'>A propos</Button></a>
            </div>
            <div className='middle'>
              <Link><Button variant='link'>Formation</Button></Link>
              <Link to={"/blog"}><Button variant='link'>Blog</Button></Link>
              <Link to={"/rgpd"}><Button variant='link'>RGPD</Button></Link>
            </div>
            <div className='right'>
              <Link to={"/cgv"}><Button variant='link'>Conditions</Button></Link>
              <Link to={"/politique"}><Button variant='link'>Politiques</Button></Link>
              <Link to={"/cookies"}><Button variant='link'>Paramètres de cookies</Button></Link>
            </div>
          </footer>
        )
      }

    return (<div className='formation App'>
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
            <h1>Formation</h1>
            <section id='main' className='d-flex flex-column'>
                <div id="part1" className='d-flex flex-column align-items-center'>
                    <span className='align-self-lg-start'>Etant formatrice certifiée RNCP, je propose des formations sur les thèmes suivants :</span>
                    <ListGroup as={"ul"}>
                        <ListGroupItem as={"li"}>La gestion du stress et bien-être au travail</ListGroupItem>
                        <ListGroupItem as={"li"}>Communication interpersonnelle et assertivité</ListGroupItem>
                        <ListGroupItem as={"li"}>Confiance en soi et affirmation de soi</ListGroupItem>
                        <ListGroupItem as={"li"}>Leadership et impact personnel</ListGroupItem>
                        <ListGroupItem as={"li"}>Gestion du temps et organisation</ListGroupItem>
                    </ListGroup>
                </div>
                <div className='mt-3'>
                  <span><b className='bolding'>Ces formations sont proposées en distanciel, en présentiel ainsi qu’en Blended.</b></span> <br/><br/>
                  <span>J’utilise différentes méthodes lors des séances :</span>
                </div>
                <div className="mt-3">
                    <div className="contacts">
                        <div className="contact">
                            <Icon size='40px' name={"bxs-envelope"}/>
                            <Button variant='link' href='mailto:scarabee.dore21@gmail.com'>scarabee.dore21@gmail.com</Button>
                        </div>
                        <div className="contact">
                            <Icon size='40px' name={"bxs-phone"}/>
                            <Button variant='link' href='tel:0760231984'>(+33)7.60.23.19.84</Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <FooterComponent/>
    </div>);
}

export default Formation;