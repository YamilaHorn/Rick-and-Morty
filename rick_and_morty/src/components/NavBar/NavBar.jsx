import SearchBar from "../searchbar/SearchBar";
import style from "../NavBar/NavBar.module.css";
import { Link, NavLink } from "react-router-dom"; //sirve para enrutar

const NavBar = ({onSearch}) => {
    return (
        <div className={style.nav}>
           <SearchBar onSearch={onSearch}/>

           <Link to="/home">
                <button>Home</button>
           </Link>

           <NavLink to="/about">
                <button>About</button>
           </NavLink>
       
           <NavLink to="/Favorites">
                <button>Favorites</button>
           </NavLink>
       
       
        </div>
    )
};

export default NavBar;