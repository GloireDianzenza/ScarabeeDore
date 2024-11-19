import React from 'react';
import { ListGroup,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Scarabee from "../Assets/scarabée doré or et bleu-Photoroom.jpg";

function Cookies() {

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
              <Button variant='link' href='#top'>Paramètres de cookies</Button>
            </div>
          </footer>
        )
      }

    return (<div className='cookies App'>
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
            <h1 className='mb-4'>Paramètres de cookies</h1>
            <p>En visitant le site Web et en consultant les pages, vous comprenez et acceptez la façon dont nous traitons les données personnelles conformément à notre politique de confidentialité. Nous respectons votre vie privée et le droit de contrôler vos données personnelles.</p> <br /><br />
            <p>Les cookies sont de petites quantités d’informations stockées dans des fichiers au sein du navigateur utilisé. Les cookies sont accessibles et enregistrés par les sites internet que vous consultez, et par les sociétés qui affichent leurs annonces publicitaires sur des sites internet, pour qu’ils puissent reconnaître le navigateur. Les sites Internet peuvent uniquement accéder aux cookies qu’ils ont stocké sur votre ordinateur, et pas autrement.</p> <br /><br />
            <p>Voici les principaux usages des cookies: </p>
            <ul>
              <li>Reconnaître le navigateur utilisé et enregistrer les information déterminées (infos de connexion, etc...)</li>
              <li>Gérer des connexion à des services tiers (Réseaux sociaux...)</li>
              <li>Cibler l'internaute qui visite le site</li>
              <li>Déterminer les statistiques de fréquentation du site Web</li>
            </ul> <br /><br />
            <p>Nous vous rappelons que vous être libre de configurer le navigateur pour accepter les cookies, refuser certains ou tous les bloquer.</p>
        </main>
        <FooterComponent/>
    </div>);
}

export default Cookies;