import "../Detail/Detail.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



const Detail = () => {
       const {id} = useParams();
       const [character, setCharacter] = useState({});

useEffect(()=>{
       axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
           setCharacter(data);
       } else {
         window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});

}, [id])

       return (
        <div className="detail">

           <div className="detail-container">
              
           <img src={character.image && character.image}  alt=""/>
           <h2>Name: "{character.name && character.name}"</h2>
           <h2>Status: "{character.status && character.status}"</h2>
           <h2>Species: "{character.species && character.species}"</h2>
           <h2>Gender: "{character.gender && character.gender}"</h2>
           <h2>Origin: "{character.origin?.name && character.origin?.name}"</h2>
              
           <Link to="/home">
             <button>Back</button>
           </Link>
           
           </div>  
           
           
        </div>
       )
};

export default Detail;