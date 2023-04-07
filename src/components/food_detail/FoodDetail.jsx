import React from 'react'


export const FoodDetail = ({name, img, description, price}) => {

  
  return (
    <section className="foodDetail_container">
        <img className="animate__animated animate__slideInUp" src={img} alt={name} ></img>
        <div className="foodData_container">
        <h2>{name}</h2>
         <p>{description}</p>
         <p>{price}</p>  
        </div>
        
   </section>
  )
}
