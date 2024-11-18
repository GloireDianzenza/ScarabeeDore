import React from 'react';
import { ListGroup,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Scarabee from "../Assets/scarabée doré or et bleu-Photoroom.jpg";

function Politique() {

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
              <Link to={"/formation"}><Button variant='link'>Formation</Button></Link>
              <Link to={"/blog"}><Button variant='link'>Blog</Button></Link>
              <Link to={"/rgpd"}><Button variant='link'>RGPD</Button></Link>
            </div>
            <div className='right'>
              <Link to={"/cgv"}><Button variant='link'>Conditions</Button></Link>
              <Button variant='link' href='#top'>Politiques</Button>
              <Link to={"/cookies"}><Button variant='link'>Paramètres de cookies</Button></Link>
            </div>
          </footer>
        )
      }

    return (<div className='politique App'>
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
            <h1 className='mb-4'>Politiques de confidentialité</h1>
            <h2>Les informations pouvant être collectées</h2>
            <p>Informations personnelles (nom,adresse,email...), navigateur Web, fuseau horaire et certains cookies...</p>
            <h2>Vos droits</h2>
            <ul className='conditions-list'>
              <li>Être informé sur vos données</li>
              <li>Consulter vos données</li>
              <li>Demander la correction de vos données</li>
              <li>Supprimer vos données</li>
            </ul>
            <h2>Divulgation légale</h2>
            <p>Je divulgerai toute information que je collecte et utilise si la loi l’exige ou l’autorise, par exemple pour me conformer à une citation à comparaître, à une procédure judiciaire similaire ou répondre à une demande du gouvernement.</p>
            <p>Si vous avez quelconque réclamation concernant vos données personnelles, veuillez me contacter: <Button variant='link' href='mailto:scarabee.dore21@gmail.com'>scarabee.dore21@gmail.com</Button> ou <Button variant='link' href='tel:0760231984'>07.60.23.19.84</Button></p>
        </main>
        <FooterComponent/>
    </div>);
}

export default Politique;