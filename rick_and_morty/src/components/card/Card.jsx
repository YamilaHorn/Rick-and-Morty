import style from "./card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/action";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { jsx as _jsx } from 'react/jsx-runtime';

const Card = ({ id, name, status, species, gender, image, onClose, origin, addFav, removeFav, myFavorites }) => {

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    setIsFav(!isFav);
    isFav ? removeFav(id) : addFav({ id, name, status, species, gender, image, origin });
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return _jsx("div", {
    className: "card",
    children: [
      _jsx("div", {
        className: style.fondo,
        children: [
      _jsx("img", {
        src: image,
        alt: ''
      }),
      _jsx("buttonfav", {
        onClick: handleFavorite,
        children: isFav ? '💚' : '🤍'
      }),
      
      _jsx("h2", {
        children: "Name:"
      }),
          _jsx(Link, {
            to: `/detail/${id}`,
            children: _jsx("p", {
              children: name
            })
          }),
          _jsx("h2", {
            children: "Status:"
          }),
          _jsx("p", {
            children: status
          }),
          _jsx("h2", {
            children: "Species:"
          }),
          _jsx("p", {
            children: species
          }),
          _jsx("h2", {
            children: "Gender:"
          }),
          _jsx("p", {
            children: gender
          }),
          _jsx("h2", {
            children: "Origin:"
          }),
          _jsx("p", {
            children: origin
          }),
          _jsx("button", {
            onClick: () => {
              onClose(id);
            },
            children: "X"
          })
         
        ]
      })
    ]
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
   
   
   
   
   
   
   
   