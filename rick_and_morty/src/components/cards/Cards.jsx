import Card from '../card/Card';
import style from "./cards.module.css";
 
const Cards = ({characters, onClose}) => {
   return (
      <div className={style.container}>
      {
         characters.map(({id, name, status, species, gender, image, origin}) => {
            return (
               <Card
               key={id}
               id={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               status={status}
               origin={origin.name}
               onClose={onClose}
               />
            )
         })
      }
      </div>
   )
 }

export default Cards;
