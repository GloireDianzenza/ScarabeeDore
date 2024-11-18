import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sandra from "../Assets/Untitled_Message/Crois en tes rêves.png";
import Scarabee from "../Assets/scarabée doré or et bleu-Photoroom.jpg";

function QuiSuisJe() {


    function HeaderList(){
        return (
          <ListGroup as={"ul"}>
            <ListGroup.Item as={"li"}><Link to={"/#top"}><Button variant='link'>Accueil</Button></Link></ListGroup.Item>
            <ListGroup.Item as={"li"} id='apropos'>
              <Button variant='link'>A propos...</Button>
              <ListGroup as={"ul"} className='submenu'>
                <ListGroup.Item as={"li"} active={true}><Button variant='link' href='#top'>Qui suis-je ?</Button></ListGroup.Item>
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
              <a href="#top"><Button variant='link'>Qui suis-je ?</Button></a>
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

    return (<div className='qui-suis-je App'>
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
            <h1>Qui suis-je ?</h1>
            <img src={Sandra} alt='sandra'/>
            <section id="part-1">
              <span>Je suis Sandra, coach en développement personnelle et professionnelle, certifiée en France et à l'étranger, formatrice certifiée RNCP. J'ai acquis durant mon parcours professionnel et personnel des compétences, des capacités d'adaptation aux personnes et aux diverses situations, une capacité d'analyse permettant de trouver des solutions et de mieux affronter les épreuves. J'ai vécu des épreuves assez difficiles au cours de ma vie (perte de ma grand-mère à l'âge de 6 ans, harcèlement au collège, violence conjugale, harcèlement moral au travail, le cancer, FIV, perte d'un enfant...) <br/><br/>Tous ces évènements m'ont rendu plus forte et je souhaite vous aider lors de l’accompagnement afin que vous puissiez réaliser votre objectif/vos objectifs et que vous soyez relier sur votre chemin de vie vous permettant ainsi d'être heureux/heureuse. </span>
            </section>
        </main>
        <FooterComponent/>
    </div>);
}

export default QuiSuisJe;