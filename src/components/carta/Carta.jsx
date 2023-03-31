import React from 'react'

export const Carta = ({name, img}) => {
  return (
    <div className="food_container">
        <h3 className="food_container_title">{name}</h3>
        <img src={img} alt={name} ></img>
    </div>
  )
}
