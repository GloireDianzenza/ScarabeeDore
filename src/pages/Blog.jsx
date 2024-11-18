import React, { useEffect, useState } from 'react';
import { ListGroup,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ArticleComponent from '../components/ArticleComponent';
import Scarabee from "../Assets/scarabée doré or et bleu-Photoroom.jpg";

function Blog() {

    const [articles,setArticles] = useState([{id:0,image:"",dateEnvoi:"",tpsLecture:0,categorie:"",titre:"Titre",contenu:""}]);

    function HeaderList(){
        return (
          <ListGroup as={"ul"}>
            <ListGroup.Item as={"li"} active={true}><Link to={"/#top"}><Button variant='link'>Accueil</Button></Link></ListGroup.Item>
            <ListGroup.Item as={"li"} id='apropos'>
              <Button variant='link'>A propos...</Button>
              <ListGroup as={"ul"} className='submenu'>
                <ListGroup.Item as={"li"}><Link to={"/qui"}><Button variant='link'>Qui suis-je ?</Button></Link></ListGroup.Item>
                <ListGroup.Item as={"li"}><Link to={"/bureau"}><Button variant='link'>Nos bureaux</Button></Link></ListGroup.Item>
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
              <Link to={"/qui"}><Button variant='link'>Qui suis-je ?</Button></Link>
              <Link to={"/avis"}><Button variant='link'>Avis des clients</Button></Link>
              <a href='#top'><Button variant='link'>A propos</Button></a>
            </div>
            <div className='middle'>
              <Link to={"/formation"}><Button variant='link'>Formation</Button></Link>
              <Button variant='link' href='#top'>Blog</Button>
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
        async function getArticles(){
            try {
                let request = await fetch("http://localhost:8080/api/articles");
                const articles = await request.json();
                setArticles(articles);
            } catch (error) {
                console.error(error);
            }
        }
        getArticles();
    },[])

    return (<div className='blog App'>
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
            <h1 className='text-center'>Liste de blogs de développement professionnel et personnel</h1>
            <section id='blogs'>
                {articles.map((val,idx)=><ArticleComponent key={idx} article={val}/>)}
                {/* <div className="inner-blog">
                    <img src={Funambule}/>
                    <div>
                        <p>Il y a 5 minutes</p>
                        <p>3 minutes de lecture</p>
                    </div>
                    <p className='subtitle'>Coach de vie</p>
                    <h3>Trouver un équilibre entre vie personnelle et vie professionnelle</h3>
                </div>
                <div className="inner-blog">
                    <img src={Funambule}/>
                    <div>
                        <p>Il y a 5 minutes</p>
                        <p>3 minutes de lecture</p>
                    </div>
                    <p className='subtitle'>Coach de vie</p>
                    <h3>Trouver un équilibre entre vie personnelle et vie professionnelle</h3>
                </div> */}
            </section>
        </main>
        <FooterComponent/>
    </div>);
}

export default Blog;