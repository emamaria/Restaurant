

import { useParams } from 'react-router-dom'
import {adress} from '../../data/adress/adress.js'
import { useState } from 'react';


export const ReservationFormPage = () => {

    const [okSubmit, setOkSubmit] = useState(false)
   let reservationTime = ["13:15","13:30","13:45","13:50","14:05","14:20","14:35","14:50","19:15",
    "19:30","19:45","20:00","20:15","20:30","20:45","21:00","21:15","21:30","21:45","22:00",
    "22:15","22:30","22:45"]


    let {sitio} = useParams()

    let currentAdress;
    currentAdress = adress.filter( add => add.name.toLowerCase() === sitio)[0]

    console.log(currentAdress)

    const initialValue = {
      date: "",
      time: "",
      personsNum: "",
      email: ""
     }

     const [form, setForm] = useState(initialValue)

     const inputOnChange = (e) =>{
         const {name, value} = e.target

         setForm({...form, [name]:value})
     }
   

    const {date, time, personsNum, email} = form;

    // const {adress, tel, openTime } = currentAdress

    console.log(date, time, personsNum, email)

    

    const submitData = (e) => {
    
      e.preventDefault()
      setForm(initialValue)
      setOkSubmit(true)
       console.log(okSubmit)
       setTimeout(() => {
        setOkSubmit(false)
       }, 5000);
       console.log(time)
    }

   
  return (
    <main className="reservation_form_container">
    <h2 className="reservation_form__title ">Reserva Mesa</h2>
    <form className="reservation_form" onSubmit={submitData}>
        <h3 className="form_title section_space">{sitio[0].toUpperCase() + sitio.substring(1)}</h3>
        <fieldset className='first_fieldset section_space'>
            <p>{currentAdress.adress}</p>
            <p>{currentAdress.openTime}</p>
            <p>{currentAdress.tel}</p>
        </fieldset>
        <fieldset  className='second_fieldset section_space'>
    <label htmlFor="email">Su email:</label> 
    <input required type="email" id="email" className="form_control" placeholder="tu email"  name="email" value={email} onChange={inputOnChange} />
     <label htmlFor="date">Seleccione fecha:</label>
     <input  required type="date" id="date" className="form_control"  min={`${new Date().getDate()}`} max="2023-12-31" name="date" value={date} onChange={inputOnChange}/>
      <label htmlFor="quantity">Personas:</label>
      <select required className="form_control" id="quantity" name="personsNum" value={personsNum} onChange={inputOnChange} >
     { [...Array(10).keys()].map((index)=> <option value={index + 1} key={index} > {index + 1} Pax</option>)}
      </select>
      <label htmlFor="time">Seleccione la hora:</label>
       <select required className="form_control" placeholder="what time"   id="time" name="time" value={time} onChange={inputOnChange}>
        {reservationTime.map((time, index) =>  <option key={index} value={time} >{time}</option>)}
       </select>
       <span className={(okSubmit === false)?"no_submit":"ok_submit"}>Gracias por su reserva!</span>
      </fieldset>
     
 <button  className="reservation_button">Reserva</button>

 </form>

 

  </main>
  )
}
