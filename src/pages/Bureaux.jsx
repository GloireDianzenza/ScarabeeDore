import React from 'react';
import { ListGroup,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../css/bureau.css";
import 'leaflet/dist/leaflet.css';
import Scarabee from "../Assets/scarabée doré or et bleu-Photoroom.jpg";
// const myIcon = new Icon({
//  iconUrl: marker,
//  iconSize: [32,32]
// })


function Bureaux() {

    // function BureauMap(){

    //     function CurrentLocationMarker(){

    //         const [position,setPosition] = useState(null);
    //         const map = useMapEvents({
    //             click(){
    //                 let test = new L.latLng(48.900890,2.155090);
    //                 setPosition(test);
    //                 map.flyTo(test,map.getZoom());
    //             }
    //         })

    //         useEffect(()=>{
    //             let test = new L.latLng(48.900890,2.155090);
    //             map.flyTo(test,map.getZoom());
    //         },[position,map])
            
    //         useEffect(()=>{
    //             let test = new L.latLng(48.900890,2.155090);
    //             setPosition(test);
    //             map.flyTo(test,map.getZoom());
    //         },[])

            
    //         return position === null ? null : (<Marker position={position} icon={myIcon}>
    //             <Popup>Scarabée Doré</Popup>
    //         </Marker>);
    //     }
        

    //     return (<div id='map'>
    //             <MapContainer center={[48.900890, 2.155090]} zoom={16} scrollWheelZoom={false}>
    //                 <TileLayer
    //                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //                 />
    //                 <CurrentLocationMarker/>
    //             </MapContainer>
    //     </div>);
    // }

    function HeaderList(){
        return (
          <ListGroup as={"ul"}>
            <ListGroup.Item as={"li"}><Link to={"/#top"}><Button variant='link'>Accueil</Button></Link></ListGroup.Item>
            <ListGroup.Item as={"li"} id='apropos'>
              <Button variant='link'>A propos...</Button>
              <ListGroup as={"ul"} className='submenu'>
                <ListGroup.Item as={"li"}><Link to={"/qui"}><Button variant='link'>Qui suis-je ?</Button></Link></ListGroup.Item>
                <ListGroup.Item as={"li"} active={true}><Button variant='link' href='#top'>Formules de coaching</Button></ListGroup.Item>
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
              <Link to={"/cookies"}><Button variant='link'>Paramètres de cookies</Button></Link>
            </div>
          </footer>
        )
      }

    return (<div className='bureau App'>
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
            <h1 className='text-center'>Les différentes formules de coaching proposées</h1>
            <section id='part1' className='d-flex flex-column'>
              <h2>
Coaching (50€) (durée 1 heure)
</h2>
            <span>Le nombre de séances sera défini lors de notre premier entretien. Les séances seront ajustées en fonction de l’atteinte de l’objectif fixé.  <br/><br/>
En général le nombre de séances varient de 4 à 10 séances réparties toutes les 2 semaines voir une fois par mois.
</span>
            <h2>Coaching de groupe : (40€/personnes, durée de 2 heures)</h2>
            <span>Le coaching en groupe favorise l'interaction et l'échange entre participants, ce qui crée une synergie. Les membres peuvent partager leurs expériences, ce qui enrichit le processus d'apprentissage et permet à chacun de bénéficier des perspectives des autres. <br/><br/>
Les participants se soutiennent mutuellement, ce qui renforce la motivation et l'engagement. La dynamique de groupe peut aider à surmonter les obstacles personnels, car les membres se sentent moins isolés dans leurs défis <br/><br/>
Les séances se déroulent en visio par groupe de 6 personnes.
</span>
            <h2>Coaching analytique (240€) (durée 3 heures)</h2>
            <span>Le coaching analytique se concentre sur l'exploration des schémas de pensée et des comportements d'un individu, souvent en lien avec son passé, ses expériences et ses croyances. Contrairement aux méthodes de coaching plus orientées vers l'action et les résultats immédiats, le coaching analytique prend le temps d'examiner les racines psychologiques des problèmes rencontrés par le coaché. <br/><br/>
Il s'agit d'un processus de réflexion et de prise de décision qui s'appuie sur la recherche et l'analyse des informations et des données à partir desquelles vous pouvez développer des solutions créatives et innovatrices. Le coaching analytique vise à vous aider à prendre des décisions plus éclairées et à améliorer vos performances et vos résultats. Il peut également vous aider à accroître votre confiance et votre capacité à prendre des décisions plus rapidement et plus efficacement. <br/><br/>
<b className='bolding' style={{color:"yellow !important"}}>C'est un engagement mutuel basé sur la confiance, la bienveillance. Je suis soumise au secret professionnel, pour cette raison toutes les séances de coaching sont Confidentielles. </b>
</span>
            </section>
        </main>
        <FooterComponent/>
    </div>);
}

export default Bureaux;