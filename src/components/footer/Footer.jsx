import React from 'react'
import { adress } from '../../data/adress'
import { Restaurant } from '../restaurant/Restaurant'

const Footer = () => {
  return (
  <footer class="footer">
    <h3>Nuestros Restaurantes</h3>
    <div class="adresses_container">
    {adress.map(ad => <Restaurant name={ad.name} adress={ad.adress} tel={ad.tel}/>)}
    </div>
    <div class="sns_container">
    <i class="fa-brands fa-square-twitter"></i>
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-youtube"></i>
    <i class="fa-brands fa-facebook"></i>
    </div>
     <div class="copy_policy_container" >
      <div class="policy_container">
       <p>Aviso legal</p>
       <p>Política de cookies</p>
       <p>Política de privacidad</p>
       </div>
       <div class="copy">
       <p>&#169; 2023 - Todos los derechos reservados</p>
       </div>
     </div> 
    
  </footer>
  )
}

export default Footer