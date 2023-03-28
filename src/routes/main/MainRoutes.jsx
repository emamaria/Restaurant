import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom"
import Contanct from '../../pages/contact/Contanct'
import Home from '../../pages/home/Home'
import Menu from '../../pages/menu/Menu'
import Reservation from '../../pages/reservation/Reservation'
import { Desserts } from '../../pages/submenu/desserts/Desserts'
import { Drinks } from '../../pages/submenu/drinks/Drinks'
import { Pasta } from '../../pages/submenu/pasta/Pasta'
import { Pizzas } from '../../pages/submenu/pizzas/Pizzas'
import { Salads } from '../../pages/submenu/salads/Salads'
import { Starters } from '../../pages/submenu/starters/Starters'


const MainRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/menu" element={<Menu/>}/>
    <Route path="/menu/starters" element={<Starters/>}/>
    <Route path="/menu/salads" element={<Salads/>}/>
    <Route path="/menu/pasta" element={<Pasta/>}/>
    <Route path="/menu/pizzas" element={<Pizzas/>}/>
    <Route path="/menu/desserts" element={<Desserts/>}/>
    <Route path="/menu/drinks" element={<Drinks/>}/>
    <Route path="/menu/*" element={<Navigate to="/menu"/>}/>
    <Route path="/contact" element={<Contanct/>}/>
    <Route path="/reservation" element={<Reservation/>}/>
    <Route path="/*" element={<Navigate to="/"/>}/>
   </Routes>
  )
}

export default MainRoutes