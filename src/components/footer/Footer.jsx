import React from 'react'
import { adress } from '../../data/adress/adress.js'
import { Restaurant } from '../restaurant/Restaurant'

const Footer = () => {
  return (
  <footer className="footer">
    <h3>Nuestros Restaurantes</h3>
    <div className="adresses_container">
    {adress.map((ad, index) => <Restaurant key={index} name={ad.name} adress={ad.adress} tel={ad.tel}/>)}
    </div>
    <div className="sns_container">
    <i className="fa-brands fa-square-twitter"></i>
    <i className="fa-brands fa-instagram"></i>
    <i className="fa-brands fa-youtube"></i>
    <i className="fa-brands fa-facebook"></i>
    </div>
     <div className="copy_policy_container" >
      <div className="policy_container">
       <p>Aviso legal</p>
       <p>Política de cookies</p>
       <p>Política de privacidad</p>
       </div>
       <div className="copy">
       <p>&#169; 2023 - Todos los derechos reservados</p>
       </div>
     </div> 
    
  </footer>
  )
}

export default Footer