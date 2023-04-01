import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom"
import Contanct from '../../pages/contact/Contanct'
import Home from '../../pages/home/Home'
import Menu from '../../pages/menu/Menu'
import Reservation from '../../pages/reservation/Reservation'
import { FoodDetails } from '../../pages/food_details/FoodDetails'


const MainRoutes = () => {
  return (
    
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/menu" element={<Menu/>}/>
    <Route path="/menu/:submenu" element={<FoodDetails/>}/>
    <Route path="/menu/*" element={<Navigate to="/menu"/>}/>
    <Route path="/contacto" element={<Contanct/>}/>
    <Route path="/reservas" element={<Reservation/>}/>
    <Route path="/*" element={<Navigate to="/"/>}/>
   </Routes>
   
  )
}

export default MainRoutes