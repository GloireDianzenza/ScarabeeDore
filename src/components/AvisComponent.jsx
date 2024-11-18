import React, { useEffect, useState } from 'react';
import "../css/avis.css";

function AvisComponent({value}) {

    const [review,setReview] = useState({id:0,contenu:"",UserId:0,user:{id:0},etoiles:0})
    const [currentUser,setUser] = useState({prenom:"",nom:"",email:""});
    
    useEffect(()=>{
        if(value.UserId <= 0)return;
        setReview(value);

        fetch("http://localhost:8080/api/users/"+value.UserId)
        .then(response=>response.json())
        .then(data=>{
            setUser(data);
        })
        .catch(error=>console.error(error));
    },[])
    
    return (<div className='avis-item' id={value.id}>
        <h2>{currentUser.prenom && currentUser.prenom} {currentUser.nom}</h2>
        <h4>{currentUser.email}</h4>
        <p>{review.contenu}</p>
        <div className="etoiles">
            {/* <i className='avis-star bx bx-star'/>
            <i className='avis-star bx bxs-star'/> */}
            {Array.from(Array(5),(e,i)=>{
                return i < review.etoiles ? <i className='avis-star bx bxs-star' key={i}/> : <i className='avis-star bx bx-star' key={i}/>;
            })}
        </div>
    </div>);
}

export default AvisComponent;