import React from 'react'
import {adress} from '../../data/adress/adress.js'
import { ReservationComponent } from '../../components/reservation/ReservationComponent'

const Reservation = () => {
  return (
    <main className="reservation_container">
      <h2 className="reservation_title">Reserva mesa</h2>
      <div className="all_reservation_palces_container">
          {adress.map((add, index) => 
          <ReservationComponent 
          key={index}
          name={add.name} 
            adress={add.adress}
            tel={add.tel}
            openTime={add.openTime}
          />)}
      </div>
    </main>
  )
}

export default Reservation