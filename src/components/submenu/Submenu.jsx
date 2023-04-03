import React from 'react'
import { Link } from "react-router-dom";

export const Submenu = ({name, img}) => {

 let imageStyle = {
    backgroundImage: `url(${img})`,
    width: "270px",
    height: "250px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    fontSize: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    margin: "5px",
    borderRadius: "15px"
 }

 const goToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
};
  return (
    <section className="submenu_container">
    <Link to={`/menu/${name.toLowerCase()}`} onClick={goToTop}>
    <div style={imageStyle} > 
    Ver {name[0] + name.substring(1)} 
    </div>
    </Link>
    </section>
  )
}
