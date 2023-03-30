import React from 'react'
import {useEffect, useState} from 'react';

const Navbar = () => {

const [scrollStyle, setScrollStyle] = useState("")


  const currentStyle = `header_nav ${scrollStyle}`

  useEffect(() => {
    const handleScroll = event => {
    if(window.scrollY > 70){
      console.log("white")
      setScrollStyle('scrolled_nav')

    }else{
      setScrollStyle('')
    }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 

  return (
    <nav className={currentStyle}>Navbar</nav>
  )
}

export default Navbar