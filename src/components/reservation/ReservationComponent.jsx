import React from 'react'

export const ReservationComponent = ({name, adress, tel, openTime}) => {
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
        <button className="reservation_access_button">Reservar</button>
    </section>
  )
}
