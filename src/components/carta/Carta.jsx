import React from 'react'
import { Link } from "react-router-dom";

export const Carta = ({name, img}) => {
  return (
    <div className="food_container">
        <h3 className="food_container_title">{name}</h3>
        <Link to={`/menu/${name.toLowerCase()}`}>
        <img src={img} alt={name} ></img>
        </Link>  
    </div>
  )
}
