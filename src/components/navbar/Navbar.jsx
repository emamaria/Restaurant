import React from 'react'
import {useEffect, useState} from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {

const [scrollStyle, setScrollStyle] = useState("")

const [showMenu, setShowMenu] = useState("")

const [menuStatus, setMenuStatus] = useState(false)

  const currentStyle = `header_nav ${scrollStyle}`

  const menuClass = `nav_menu ${showMenu}`

  useEffect(() => {
    const handleScroll = event => {
    (window.scrollY > 70)?setScrollStyle('scrolled_header'):setScrollStyle('')
    
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const toggleMenu = ()=>  {

    console.log(menuStatus)
    setMenuStatus(!menuStatus)
    menuStatus?setShowMenu("show_nav"): setShowMenu("")
    
    }

  return (
    <header className={currentStyle}>
      <h2 className="header_title">Delizioso</h2>
      <button onClick={toggleMenu}  className="hamburger_button">
      <i className="fa-solid fa-bars"></i>
      </button>
      <nav className={menuClass}>
        <ul className="nav_menu_ul">
          <li className="nav_menu_list">
          <NavLink to="/"style={({ isActive }) => ({ color: isActive ? "gray" : "#cbbeb5" })}>
         Inicio
        </NavLink></li>
          <li className="nav_menu_list">
          <NavLink to="/menu"style={({ isActive }) => ({ color: isActive ? "gray" : "#cbbeb5" })}>
         Carta
        </NavLink>
          </li>
          <li className="nav_menu_list">
          <NavLink to="/reservation"style={({ isActive }) => ({ color: isActive ? "gray" : "#cbbeb5" })}>
         Reservar
        </NavLink>
          </li>
          <li className="nav_menu_list">
          <NavLink to="/contact"style={({ isActive }) => ({ color: isActive ? "gray" : "#cbbeb5" })}>
         Contacto
        </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar