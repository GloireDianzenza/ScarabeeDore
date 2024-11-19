import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../css/formation.css";
import Scarabee from "../Assets/logo définitif2.png";

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
            <ListGroup.Item as={"li"}><Link to={"/contact"}><Button variant='link'>Contactez-nous</Button></Link></ListGroup.Item>
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
              <Link><Button variant='link'>Formation</Button></Link>
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

    return (<div className='formation App'>
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
                  <ol className='ignore1'>
                    <li>Méthode affirmative :</li>
                    <ul>
                      <li>J’explique en utilisant diverses présentations : Powerpoint, des études de cas vécues…</li>
                    </ul>
                    <li>Méthode interrogative :</li>
                    <ul>
                      <li>J’implique les apprenants en les interrogeant sur leurs expériences vécus</li>
                    </ul>
                    <li>Méthode démonstrative :</li>
                    <ul>
                      <li>Mise en pratique via des exercices, des simulations en demi-groupe</li>
                    </ul>
                    <li>Méthode expérimentielle :</li>
                    <ul>
                      <li>Je me centre sur l'apprentissage par l'erreur et l'expérimentation</li>
                    </ul>
                  </ol>
                  <span>Toutes les séances sont basées sur la bienveillance et le secret professionnel. </span>
                  <span>Pour toute information, vous pouvez me solliciter à l’adresse email suivante :
<a href="mailto:scarabee.dore21@gmail.com">scarabee.dore21@gmail.com</a> <br />
Ou par téléphone :
<a href="tel:0760231984">07.60.23.19.84</a>
</span>
                </div>
            </section>
        </main>
        <FooterComponent/>
    </div>);
}

export default Formation;