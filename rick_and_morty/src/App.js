import './App.css';
import Cards from './components/cards/Cards.jsx';
//import characters from './data.js';
import NavBar from './components/NavBar/NavBar';
import { useState, useEffect } from 'react'; //useState sirve para crear estados locales
import axios from "axios";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import About from "./components/About/About";
import Detail from './components/Detail/Detail';
import Forms from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
const EMAIL = 'hornmacarena12@hotmail.com';
const PASSWORD = 'asd123';


function App() {
   const [characters, setCharacters] = useState ([]); //estado local
   const {pathname} = useLocation();
   
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
  

function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
};

useEffect(() => {
   !access && navigate('/');
}, [access]);
   

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   const onClose = (id) => {
      setCharacters (
         characters.filter((char) =>{
         return char.id !== Number(id)
         })
      )
   };
  
   return (
      
      <div className='App'>
          {pathname !== "/" && <NavBar onSearch={onSearch}/>} 

         <Routes>
            <Route path='/' element={<Forms login={login}/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/Favorites" element={<Favorites/>}/>
         </Routes>
            
      </div>
      
      );
   };
   
   

export default App;
