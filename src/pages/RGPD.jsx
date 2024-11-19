import React from 'react';
import { ListGroup,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Scarabee from "../Assets/logo définitif2.png";

function RGPD() {

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
              <Button variant='link' href='#top'>RGPD</Button>
            </div>
            <div className='right'>
              <a href='https://gloiredianzenza.github.io/portfolio/' target='_blank' rel='noreferrer'>Webmaster</a>
              <Link to={"/cookies"}><Button variant='link'>Paramètres de cookies</Button></Link>
            </div>
          </footer>
        )
      }

    return (<div className='rgpd App'>
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
                <h1 className='mb-4'>RGPD et la Confidentialité</h1>
                <h2>En vigueur au 15/11/2022</h2>
                <p className='mt-5'>Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après l’Utilisateur », de ce site , ci-après le « Site », les présentes mentions légales. <br /><br />

La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales. <br /><br />

Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ».</p>
                <h2>ARTICLE 1 – L’EDITEUR</h2>
                <p className="mt-5">
                L’édition et la direction de la publication du site est assurée par Duarte Sandra, domiciliée 7 avenue Claude Monet 78400 CHATOU. <br /><br />

                Entreprise individuelle Scarabée Doré dont le siège social est situé au 7 Avenue Claude Monet<br /><br />

                78400 Chatou<br /><br />

                SIRET :<br /><br />
                Code APE :  8559A Formation continue d’adultes.<br /><br />
                N° TVA : Non assujetti<br /><br />

                Téléphone : <a href="tel:0760231984">07.60.23.19.84</a><br /><br />

                Adresse de courrier électronique : <a href="mailto:sandra.duarte79@gmail.com">sandra.duarte79@gmail.com</a><br /><br />
                Directeur de la publication : <Link to={"/qui"}>Sandra Duarte</Link><br /><br />
                Responsable du site : <Link to={"/qui"}>Sandra Duarte</Link><br /><br />
                </p>
                <h2>ARTICLE 2 – L’HEBERGEUR</h2>
                <p className='mt-5'>L’hébergeur du Site est la société WordPress.com, dont le siège social est situé au 60 29th Street #343 San Francisco, CA 94110 United States of America , avec le numéro de téléphone : <a href="tel:8772733049">(877) 273-3049</a> + adresse mail de contact : <a href="https://automattic.com/contact/" target='_blank' rel="noreferrer">https://automattic.com/contact/</a> <br /><br />

Conformément à l’article 6 de la Loi du 21 juin 2004 pour la confiance en l’économie numérique, l’hébergeur conservera vos données de connexion, couvertes par le secret professionnel et traitées dans le respect des dispositions légales en matière de données personnelles.</p>
                <h2>ARTICLE 3 – ACCES AU SITE</h2>
                <p className="mt-5">
                Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance. <br /><br />

En cas de modification, interruption ou suspension du Site, l’Editeur ne saurait être tenu responsable.
                </p>
                <h2>ARTICLE 4 – COLLECTE DES DONNEES</h2>
                <p className="mt-5">
                Le Site assure à l’Utilisateur une collecte et un traitement d’informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés. <br /><br />

En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l’Utilisateur dispose d’un droit d’accès, de rectification, de suppression et d’opposition de ses données personnelles. L’Utilisateur exerce ce droit : une demande sera rédigée à la main et envoyée par mail. <br /><br />

Dans l’hypothèse où vous avez accepté dans nos formulaires de recevoir par email des informations et sollicitations commerciales émanant de notre société et de son réseau à entreprise individuelle Scarabée dorée vous aurez à tout moment la faculté de revenir sur cette décision, soit en cliquant sur le lien prévu à cet effet en bas des mails que vous recevez, soit en envoyant un mail avec pour objet « désabonnement » à l’adresse suivante : <a href="mailto:scarabee.dore21@gmail.com">scarabee.dore21@gmail.com</a>
                </p>
                <h3>Durée de conservation </h3>

<p className=''>Les données seront sauvegardées durant une durée maximale de 3 ans.</p>
            <h2>ARTICLE 5 - MEDIATEUR DE LA CONSOMMATION</h2>
            <p className="mt-5">
            Médiation des litiges de la consommation : Conformément aux dispositions du Code de la consommation (article L.612-1 à L.613-3)) concernant « le processus de médiation des litiges de la consommation », le client a le droit de recourir gratuitement au service de médiation proposé par Sandra DUARTE. Le médiateur « droit de la consommation » ainsi proposé est ANM (association nationale des médiateurs). Procédure de recours : <a href="https://www.anm-conso.com/anm-conso/assets/site/documents/reglement-interne-de-procedure.pdf">https://www.anm-conso.com/anm-conso/assets/site/documents/reglement-interne-de-procedure.pdf</a>
            </p>
            <h2>ARTICLE 6 - INFORMATIONS RELATIVES A VOTRE DROIT DE REFUSER LE DEMARCHAGE TELEPHONIQUE.</h2>
            <p className="mt-5">
            Parce que nous collectons vos coordonnées téléphoniques, dans l’unique but d’assurer le bon déroulement de nos entretiens de contact ou de faciliter nos échanges durant le travail que nous pouvons être amenés a poursuivre ensemble. Nous sommes dans l’obligation de vous informer de votre droit à vous inscrire sur la liste d’opposition au démarchage téléphonique que vous trouverez en cliquant ici: <a href="https://www.bloctel.gouv.fr/">https://www.bloctel.gouv.fr/</a>
            </p>
            <h2>ARTICLE 7 - MODALITE D’UTILISATION</h2>
            <p className="mt-5">
            Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site﻿, sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.
            </p>
            </main>
            <FooterComponent/>
    </div>);
}

export default RGPD;