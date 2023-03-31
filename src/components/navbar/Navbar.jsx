import React from 'react'
import {useEffect, useState} from 'react';

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
          <li className="nav_menu_list">Inicio</li>
          <li className="nav_menu_list">Carta</li>
          <li className="nav_menu_list">Reservar</li>
          <li className="nav_menu_list">Contacto</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar