import React from 'react';
import { ListGroup,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Scarabee from "../Assets/ScarabeeDore.jpg";

function CGV() {

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
              <Button variant='link' href='#top'>Conditions</Button>
              <Link to={"/politique"}><Button variant='link'>Politiques</Button></Link>
              <Link to={"/cookies"}><Button variant='link'>Paramètres de cookies</Button></Link>
            </div>
          </footer>
        )
      }


    return (<div className='cgv App'>
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
            <h1>Conditions générales de vente</h1>
            <section id='part1'>
                <h2>Article 1</h2>
                <ol>
                    <li><h3>Définitions</h3></li>
                    <ul>
                      <li>Le terme « Client » désigne une personne physique ou morale à qui le coach fournit une prestation de services d’encadrement et d’accompagnement dans le cadre défini au contrat.</li>
                      <li>Le terme « Contrat » désigne le contrat entre le Client et le coach qui est régi par les conditions générales de vente et le code déontologique du coach disponible sur le site internet du coach et sur demande. Les stipulations des présentes conditions générales prévaudront en cas de contradiction avec tout autre document contractuel du coach ou du Client.</li>
                    </ul>
                </ol>
                <h2>Article 2</h2>
                <ol className='conditions-list'>
                  <li>Objet du Contrat</li>
                  <p>Le Contrat détaille les droits et obligations respectifs du Coach et de ses Clients dans le cadre de la vente et de la réalisation, par le Coach, des prestations de coaching.</p>
                  <li>Objet des Conditions Générales de Vente</li>
                  <p>Ces CGV détaillent les modalités de vente du Coach et de ses Clients dans le cadre des prestations de coaching fournies par le Coach. <br /><br />

Ces CGV s’appliquent à tous les Contrats conclus avec les Clients. <br /><br />

Toute prestation accomplie par le Coach implique l’adhésion entière et sans réserve du Client aux présentes CGV et prévalent sur tout autre document du Client. <br /><br />

Le Client reconnait avoir pris connaissance des présentes conditions générales de vente et déclare expressément les accepter intégralement et sans réserve dès lors qu’il signe le Contrat. <br /><br />

Toute condition contraire aux CGV sera, à défaut d’acceptation expresse formelle et écrite, inopposable au Coach quel que soit le moment où elle aura pu être portée à sa connaissance. <br /><br />

Le Client s’engage à faire respecter les présentes CGV par l’ensemble de ses salariés.</p>
                <li>Mentions</li>
                <p>L’acte contractuel mentionne, outre les mentions obligatoires : le nom et le prénom ou la raison sociale du Client, son N°SIRET, sa domiciliation, le nom de son représentant dûment habilité, ainsi que tout renseignement d’ordre pratique (téléphone, mail, télécopie). <br /><br />

Le Client garantit que les données qu’il communique sont exactes et conformes à la réalité. <br /> <br />

Le Client s’engage à informer le Coach sans délai en cas de modification des données qu’il a communiquées lors de la signature du Contrat.</p>
                <li>Conclusion et modification</li>
                <p>L’acte contractuel est définitivement formé dès sa signature par les parties concernées. Chacune reçoit un exemplaire du document original rédigé selon les textes en vigueur soit en version papier soit en version dématérialisée. Au cours de l’exécution des prestations, les modifications négociées entre les parties donnent lieu à la signature d’un avenant au document contractuel. <br /><br /> 

Pour être valide, le Contrat doit être dûment complété avec les noms, prénom et informations relatives au(x) client(s) et être systématiquement signé et tamponné (si applicable) par tout représentant habilité du client. <br /><br />

Le Client déclare être majeur, ou le cas échéant d’y souscrire via son Responsable légal et avoir la capacité juridique de contracter aux conditions décrites dans les présentes CGV et ne pas être protégé au sens de l’article 488 du Code Civil. <br /><br />

Le Contrat signé est à faire parvenir au Coach au moins une semaine avant le début du coaching par mail à scarabee.dore21@gmail.com. <br /><br />
</p>
                <li>Durée et maintien du contrat</li>
                <p>Le Contrat prendra fin à la date de la dernière séance définie au Contrat hors conditions spéciales précisées dans l’article 10. <br /><br />

A l’issu du coaching, le Coach s’engage à réaliser, sur la demande du client, un bilan de prestation au profit du client intégrant entre autres les attestations de présence aux séances le concernant. <br /><br />

Le Contrat et les séances ne sont pas cessibles par le Client. </p>
                </ol>
                <h2>Article 3</h2>
                <ol className="conditions-list">
                  <p>L’achat de prestations prend l’une des formes suivantes :</p>
                  <ul>
                    <li>Un bon de commande émis par le client</li>
                    <li>Un contrat de prestation de service</li>
                  </ul> <br />
                  <li>Prestation</li>
                  <p>Le Coach propose à ses Clients des prestations de coaching définies dans le cadre d’un Contrat. <br /><br />

Sauf indication contraire définie dans le Contrat, une séance correspond à une heure d’accompagnement effectif incluant la préparation du Client et du Coach.</p>
                  <li>Organisation et planning</li>
                  <p>Le Coach est le point de contact privilégié du Client pour le planning et l’organisation des séances. <br /><br />

Toutes réservations et modifications s’effectuent directement auprès du Coach par e-mail ou téléphone. <br /><br />

Le lieu des séances est défini dans le Contrat. <br /><br />

Dans le cas de coaching d’équipe, les participants doivent impérativement avoir des objectifs communs.</p>
                </ol>
                <h2>Article 4</h2>
                <p>
                Toute annulation de la prestation doit parvenir au Coach par écrit au moins 15 jours avant le début de la prestation et après le délai de quatorze jours de réflexion. <br /><br />

En cas d’annulation postérieure à ce délai – à la demande du Client – confirmée par écrit (lettre ou mail), 30 % du coût de la prestation ou du premier versement de l’échéancier, resteront acquis par le Coach. <br /><br />

Tout coaching commencé est dû dans sa totalité. <br /><br />

Les Clients sont tenus de respecter les rendez-vous et les horaires préalablement définis. Sauf décision contraire défini au Contrat, aucune séance, une fois réservée, ne pourra être annulée et sera due. Celle-ci pourra toutefois être déplacée selon les disponibilités du Coach et uniquement si le report de séance est demandé par le Client au maximum 24h à l’avance. <br /><br />

Tout retard du Client sera automatiquement décompté du temps de la séance. <br /><br />

Une séance peut être annulée par le coach jusqu’à 12h avant le début de cette dernière. En cas d’annulation, le Client concerné recevra un appel (ou, en l’absence de réponse, un SMS) et la séance sera reportée à une date ultérieure. <br /><br />

Toute séance annulée par le Coach dans un délai inférieur à 12h avant le début de cette dernière et non soumise à un cas de force majeure sera reportée à une date ultérieure et non facturée au profit du Client concerné qui recevra un appel (ou, en l’absence de réponse, un SMS). 
                </p>
                <ol className="conditions-list">
                  <li>Responsabilités</li>
                  <p>L’obligation souscrite par le Coach dans le cadre des prestations qu’elle délivre est une obligation de moyens et ne peut en aucun cas être interprétée comme une obligation de résultat. <br /><br />

La responsabilité du Coach ne pourra être recherchée qu’en cas de démonstration d’un lien de causalité entre une faute lourde commise par le Coach dans l’exécution du Contrat et le dommage subi par le Client. La responsabilité du Coach ne pourra notamment pas être recherchée :</p>
                  <ul>
                    <li>En cas d’accident résultant de l’inobservation par le Client des consignes du Coach ou de l’intervenant</li>
                    <li>En cas d’accident intervenant hors des séances ou conseils prodigués par le Coach ou les intervenants</li>
                    <li>En cas d’actes ou omissions des Intervenants</li>
                    <li>Si le Client ne respecte pas les engagements qu’il prend et garanties qu’il donne au titre du Contrat</li>
                        <li>En cas de force majeure.</li>
                  </ul>
                </ol>
                <h2>Article 5</h2>
                <ol className="conditions-list">
                  <li>Prix</li>
                  <p>Les prix des prestations font référence aux stipulations contractuelles. <br /><br />

Les prix fixés sont affichés en euros (€) hors taxes pour une application en France. <br /><br />

Les prix sont garantis pendant la durée du contrat. Le coach se réserve la possibilité d’actualiser le prix de la prise en charge lors de la souscription d’un nouveau Contrat ou lors de la réalisation d’un avenant.</p>
                  <li>Facturation</li>
                  <p>Les actions de prestations seront facturées et payées selon le protocole suivant :</p>
                  <ul>
                    <li>Première et deuxième séance payée simultanément avant le début de la première séance</li>
                    <li>Troisième séance et suivantes payées à minima à la séance et avant le début de la séance précédente.</li>
                  </ul>
                  <li>Paiement</li>
                  <p>Aucun délai de paiement n’est accordé. <br /><br />

Sauf dispositions contractuelles particulières, le Client s’acquitte du prix des prestations, comptant, sans escompte, dans un délai maximal de 10 jours calendaires, date d’émission de facture <br /><br />

En cas de retard, le Coach pourra suspendre toutes les commandes en cours ainsi que les interventions futures. <br /><br />
Les prestations sont réglées par virement bancaire ou chèque, ou, le cas échéant, conformément aux conditions négociées avec le Client et stipulées dans le Contrat. <br /><br />

La date de règlement figurant sur la facture constitue le point de départ pour le calcul des pénalités de retard. Le taux des pénalités de retard est égal aux taux d’intérêt appliqué par la Banque centrale européenne à son opération de financement la plus récente majoré de 30 points de pourcentage. La facturation des pénalités de retard peut intervenir à tout moment sans rappel préalable de la part du Coach, conformément à l’article L441-6 du Code du Commerce. A ces pénalités de retard s’ajoute une indemnité forfaitaire pour frais de recouvrement dont le montant est fixé par décret. Si les frais de recouvrement exposés sont supérieurs à l’indemnité forfaitaire, une indemnisation complémentaire à hauteur des dépenses justifiées est demandée par le Coach. <br /><br />

Le Client devra rembourser tous les frais occasionnés par le recouvrement contentieux des sommes dues, y compris les honoraires des officiers ministériels (huissiers) ou d’auxiliaires de justice. <br /><br /></p>
                </ol>
                <h2>Article 6</h2>
                <ol className="conditions-list">
                  <p>Chaque Client doit souscrire une police d’assurance responsabilité civile personnelle, le couvrant de tous les dommages qu’il pourrait causer à des tiers, de son propre fait, durant les prestations. <br /><br />

Le Coach a souscrit une police d’assurance responsabilité civile professionnelle pour couvrir les dommages engageant sa responsabilité professionnelle. Les Intervenants qui pourraient être acteurs dans les séances de coaching sont des professionnels indépendants dont le Coach n’est pas responsable et qui doivent également souscrire et maintenir une assurance professionnelle.</p>
                </ol>
                <h2>Article 7</h2>
                <ol className="conditions-list">
                  <p>Conformément à la loi n°78-17 du 6 janvier 1978, dite Loi Informatique et Libertés, mise à jour par la loi du 6 août 2004, le client dispose d’un droit d’accès, de rectification et d’opposition aux informations le concernant. Ce droit peut s’exercer en faisant une demande écrite, par mail ou par courrier.</p>
                </ol>
                <h2>Article 8</h2>
                <ol className="conditions-list">
                Tout les éléments visuels et sonores du Coach, y compris la technologie sous-jacente utilisée, sont protégées par le droit d’auteur, le droit des marques, le droit des brevets et plus généralement tous droit de propriété intellectuelle et copyright. Ces éléments sont la propriété exclusive du Coach ou de ces concédants. <br /><br />

Aucun élément ne pourra être modifié, reproduit, copié, dupliqué, vendu, revendu, transmis, publié, communiqué, distribué, diffusé, représenté, stocké, utilisé, loué ou exploité de toutes manières, à titre gratuit ou onéreux, quel que soient les moyens et/ou support utilisés, qu’ils soient connus ou inconnus à ce jour, sans l’autorisation préalable exprès et écrite du Coach.
                </ol>
                <h2>Article 9</h2>
                <ol className="conditions-list">
                  <p>Le défaut de paiement total ou partiel d’une seule échéance contractuellement prévue ouvre le droit pour le Coach de résilier de plein droit le Contrat passé avec le Client, après l’envoi d’une mise en demeure restée sans effet dans un délai de quinze jours. Toutes les factures sont dues par le Client au prorata des prestations fournies augmentées ; le cas échéant des pénalités de retard prévues à l’article 5.3.4. De plus, le Client doit au Coach une indemnité égale à 50 % du prix des prestations restant à réaliser au titre du / des préjudices subis(s) par elle du fait de la résiliation.</p>
                </ol>
                <h2>Article 10</h2>
                <ol className="conditions-list">
                  <p>Lorsque, par suite de cas de force majeure, répondant aux caractéristiques définies par la jurisprudence en cours, le Coach est dans l’impossibilité de poursuivre la prestation, le Contrat conclu avec le Client est résilié de plein droit sans que ce dernier puisse prétendre à une quelconque indemnité. Le Client est toutefois tenu au paiement au prorata temporis des prestations réalisées par le Coach. <br /><br />

Lorsque, par suite de cas de force majeure, répondant aux caractéristiques définies par la jurisprudence en cours, le Coach est dans l’impossibilité d’assurer la séance, le Client sera alors prévenu le plus rapidement possible et la séance sera reportée à une date ultérieure.</p>
                </ol>
                <h2>Article 11</h2>
                <ol className="conditions-list">
                  <p>Tout litige relatif à l‘interprétation et à l’exécution du Contrat est soumis au droit français. <br /><br />

Les différents qui viendraient à se produire à propos de la validité, de l’interprétation, de l’exécution ou de l’inexécution, de l’interruption ou de la résiliation du Contrat, seront soumis à la médiation et à un règlement à l’amiable. <br /><br />

Dans l’hypothèse d’un échec de la médiation, les différents seront portés devant les juridictions françaises compétentes. <br /><br />

Les CGV et toutes relations du Coach avec ses Clients relèvent de la loi française.</p>
                </ol>
                <h2>Article 12</h2>
                <ol className="conditions-list">
                  <p>Le Client pourra, sur proposition du Coach témoigner de son expérience de coaching et se doit d’indiquer s’il accepte que son témoignage soit utilisé par le Coach sous couvert de confidentialité, et, le cas échéant, signer l’exemplaire d’autorisation de publication. <br /><br />
                  Le Coach s’assurera de la confidentialité du Client en utilisant un format d’identification préservant l’anonymat du Client </p>
                </ol>
                <h2>Article 13</h2>
                <ol className="conditions-list">
                  <p>Les parties s’engagent à garder la confidentialité quant aux informations, contenus des documents et supports et documents échangés concernant l’autre partie durant le coaching, de quelque nature qu’ils soient (économiques, commerciaux, techniques, matériel, pédagogique, …)</p>
                </ol>
                <h2>Article 14</h2>
                <ol>
                  <p>Toute modification de la législation ou de la règlementation en vigueur, ou toute décision d’un tribunal compétent invalidant une ou plusieurs clauses des conditions générales de vente ne saurait affecter la validité de l’intégralité des conditions générales de vente, dont les autres stipulations garderont leur force et leur portée. Une telle modification ou décision n’autorise en aucun cas les Clients à méconnaître les présentes CGV.</p>
                </ol>
            </section>
        </main>
        <FooterComponent/>
    </div>);
}

export default CGV;