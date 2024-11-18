import React from 'react';
import { ListGroup,Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Scarabee from "../Assets/ScarabeeDore.jpg";

function Inscription() {

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
              <Link to={"/politique"}><Button variant='link'>Politiques</Button></Link>
              <Link to={"/cookies"}><Button variant='link'>Paramètres de cookies</Button></Link>
            </div>
          </footer>
        )
      }

    /**
     * 
     * @param {import('react').BaseSyntheticEvent} event 
     */
    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const entries = Object.fromEntries(formData.entries());

        async function verifyLogin(){
            try {
                let request = await fetch("http://localhost:8080/api/users/user/login",{
                    method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(entries)
                });
                const login = await request.json();
                if(login.message)throw new Error("Déjà inscrit !");
                else{
                    request = await fetch("http://localhost:8080/api/users/",{
                        method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(entries)
                    });
                    const result = await request.json();
                    if(result.error)throw result;
                    else{
                        alert("Vous êtes maintenant inscrit. Veuillez à bien mémoriser vos informations de connexion.");
                        navigate("/");
                    }
                }
            } catch (error) {
                alert(error);
                console.error(error);
            }
        }
        verifyLogin();
    }

    return (<div className='inscription App'>
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
            <h1>S'inscrire</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId='nom'>
                    <Form.Label>Nom</Form.Label>
                    <Form.Control name='nom' placeholder='Nom' required/>
                </Form.Group>
                <Form.Group controlId='prenom'>
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control name='prenom' placeholder='Prénom' required/>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Adresse email</Form.Label>
                    <Form.Control name='email' placeholder='Email' type='email' required/>
                </Form.Group>
                <Form.Group controlId='telephone'>
                    <Form.Label>Numéro de téléphone</Form.Label>
                    <Form.Control name='telephone' placeholder='Téléphone' type='tel' required/>
                </Form.Group>
                <Button type='submit'>S'inscrire</Button>
            </Form>
        </main>
        <FooterComponent/>
    </div>);
}

export default Inscription;