import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { drinks } from '../../data/menu/drinks.js';
import { desserts } from '../../data/menu/desserts.js';
import { pasta } from '../../data/menu/pasta.js';
import { pizzas } from '../../data/menu/pizzas.js';
import { starters } from '../../data/menu/starters.js';
import { salads } from '../../data/menu/salads.js';
import { FoodDetail } from '../../components/food_detail/FoodDetail';
import { useEffect } from 'react';
//debo tomar el path dinamico de la ruta que accedo y segun tomo el dato
//de ese plato que necesito 
export const FoodDetails = () => {

    const [foodArray, setFoodArray]  = useState([])

    const {submenu} = useParams()


    useEffect(() => {
       

        switch(submenu){
          case "drinks": 
          setFoodArray([...drinks]);
          break;
          case "salads": 
          setFoodArray([...salads]);
          break; 
          case "starters": 
          setFoodArray([...starters]);
          break;
          case "pasta": 
          setFoodArray([...pasta]);
          break;
          case "pizzas": 
          setFoodArray([...pizzas]);
          break;
          case "desserts": 
          setFoodArray([...desserts]);
          break;
          default:
           setFoodArray([]);
        }
   
   
     
       console.log(submenu)
      
    }, [submenu]);

console.log(foodArray)
   
  return (
    <main className="foods_container">
        <h3>{submenu}</h3>
        <div className="foodDetails_container">
       { foodArray.map((food, index) => <FoodDetail
        name={food.name} img={food.img} key={index} description={food.description} price={food.price}
       />)}
       </div>
    </main>
  )
}
