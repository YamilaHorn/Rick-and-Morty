import style from "../About/About.module.css";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className={style.contenedor}>
          <h4>About me</h4>
          <b>¡Hola! Mi nombre es Yamila Horn y soy estudiante de Henry, te doy la bienvenida a ¡¡ Mi primer página web !! Fue un proceso largo llegar hasta este punto pero valio la pena. Espero que te guste mi sitio y me votes
             🤍 </b>
             <hr></hr>
             <Link to="/home">
             <button>Back</button>
           </Link>
        </div>
    )
};

export default About;