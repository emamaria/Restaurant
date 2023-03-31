import React from 'react'

export const FoodDetail = ({name, img, description, price}) => {
  return (
    <section className="foodDetail_container">
        <img  src={img} alt={name} ></img>
        <div className="foodData_container">
        <h3>{name}</h3>
         <p>{description}</p>
         <p>{price}</p>
        </div>
   </section>
  )
}
