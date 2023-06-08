import { connect } from "react-redux";
import Card from "../card/Card";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../Redux/action";
import { useState } from "react";
import style from "../Favorites/Favorites.module.css";
import { Link } from "react-router-dom";

const Favorites = ({myFavorites}) => {
    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();

    const handleOrder = (event) =>{
         dispatch(orderCards(event.target.value))
         setAux(!aux)
    };

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    };

    return (
        <div className={style.cartas}>
           
            <div className={style.boton}>

            <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            </select>

            

            </div>


            {   
                myFavorites?.map(({id, name, status, species, gender, origin, image})=>{
                    return (
                        <Card
                        key={id}
                        id={id}
                        name={name}
                        status={status}
                        species={species}
                        gender={gender}
                        image={image}
                        origin={origin}
                        />
                        
                    )
                })
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
};

export default connect(mapStateToProps, null) (Favorites);
