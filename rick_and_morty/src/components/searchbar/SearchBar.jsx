import style from "../searchbar/searchbar.module.css"
import { useState } from "react"; // sirve para declarar estados locales
import inputpersonalizado from "../searchbar/searchbar.module.css";

const SearchBar = ({onSearch}) => {
   const [id, setId] = useState (""); //estado local declarado
   
   const handleChange = (event) => {
      setId(event.target.value)
   };

   return (
      <div className={style.contenedor}>
          <input type='search' onChange={handleChange} value = {id} maxLength={3}/>
          <button onClick = {()=> {onSearch(id)}}>Agregar</button> 
      </div>
   );
}

export default SearchBar;
