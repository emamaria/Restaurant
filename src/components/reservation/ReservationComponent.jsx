import React from 'react'
import {useNavigate} from 'react-router-dom'

export const ReservationComponent = ({name, adress, tel, openTime}) => {

  const navigate = useNavigate()

   const handleClick = () => {
      navigate(`/reservas/${name.toLowerCase()}`)
   }
  return (
    <section className="reservation_place_container">
        <h3 className="reservation_subtitle">{name}</h3>
        <div className="adress_time_container">
        <div className="reservation_adress_container">
            <p>{adress}</p>
            <p>{tel}</p>
        </div>
        <div className="openTime_container">
            <p>{openTime}</p>
        </div>
        </div>
        <button className="reservation_access_button" onClick={handleClick}>Reservar</button>
    </section>
  )
}
