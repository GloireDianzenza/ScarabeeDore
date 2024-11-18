import React, { useEffect, useState } from 'react';
import { ListGroup,Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "../css/article.css";
import Scarabee from "../Assets/scarabée doré or et bleu-Photoroom.jpg";

function Article() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [article,setArticle] = useState({id:0,image:"",dateEnvoi:"",tpsLecture:0,categorie:"",titre:"Titre",contenu:""})
    const [dateText,setDateText] = useState("");

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
        async function getArticle(){
            try {
                let request = await fetch("http://localhost:8080/api/articles/"+id);
                const article = await request.json();
                setArticle(article);
            } catch (error) {
                alert(error);
                console.error(error);
                navigate("/blog");
            }
        }
        getArticle();
    },[])
    
    useEffect(()=>{
        const splitted = article.dateEnvoi.split("-");
        const currentDate = new Date(parseInt(splitted[0]),parseInt(splitted[1])-1,parseInt(splitted[2]));
        const today = new Date();

        const currentSeconds = currentDate.getTime() / 1000;
        const todaySeconds = today.getTime() / 1000;
        if(isNaN(currentSeconds) || isNaN(todaySeconds))return;
        const daySeconds = (60**2) * 24;
        const hourSeconds = 60**2;
        let diff = todaySeconds - currentSeconds;
        const jours = parseInt(diff / daySeconds);
        const heures = parseInt(diff / hourSeconds);
        if(jours >= 1){
          setDateText(`Il y a ${jours} jour${jours > 1 ? "s" : ""}`)
        }
        else{
          setDateText(`Il y a ${heures} heure${heures > 1 ? "s" : ""}`)
        }
    },[article])


    return (<div className='article App'>
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
            <h1 className="text-center">{article.titre}</h1>
            <section id='part1'>
                {article.image !== "" && <img src={require(`../Assets/${article.image}`)} alt='article'/>}
                <h2>{article.categorie}</h2>
                <strong>{dateText}</strong>
                <strong>{article.tpsLecture} minutes de lecture</strong>
            </section>
            <section id='part2'>
                <p>{article.contenu}</p>
            </section>
            <section id='contact' className='socials'>
                <a href='https://www.facebook.com/scarabee.dore.3' id='facebook'>
                    <i className='bx bxl-facebook-circle'></i>
                </a>
                <a href='https://www.linkedin.com/in/sandra-duarte-732090256/?original_referer=' id='linkedin'>
                    <i className='bx bxl-linkedin-square' ></i>
                </a>
                <a href='https://www.youtube.com/channel/UCilCmtLsTzdL6qkPMN2G2uA' id='youtube'>
                    <i className='bx bxl-youtube' ></i>
                </a>
                <a href='https://twitter.com/scarabeedore22' id='twitter'>
                    <i className='bx bxl-twitter' ></i>
                </a>
                <a href='mailto:scarabee.dore21@gmail.com' id='mailLink' className='mailLink'>
                    <i className='bx bx-envelope' ></i>
                </a>
                <a href='tel:0760231984' className='mailLink'>
                    <i className='bx bx-phone' ></i>
                </a>
            </section>
        </main>
        <FooterComponent/>
    </div>);
}

export default Article;