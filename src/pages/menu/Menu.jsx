import React from 'react'
import {fullMenu} from '../../data/menu/full_menu'
import { Carta } from '../../components/carta/Carta'

const Menu = () => {

  
  return (
    <main className="fullMenu_container">
     <h2 className="carta_title">Nuestra Carta</h2> 
     <section>
      {fullMenu.map((menu, index) =>  <Carta key={index} name={menu.name} img={menu.img}/>)}
     </section>
    </main>
  )
}

export default Menu