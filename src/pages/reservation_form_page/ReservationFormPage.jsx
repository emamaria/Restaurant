import React from 'react'
import {useForm}  from '../../customHook/form'
import { useParams } from 'react-router-dom'
import {adress} from '../../data/adress/adress.js'


export const ReservationFormPage = () => {
  
    let {sitio} = useParams()

    let currentAdress;
    currentAdress = adress.filter( add => add.name.toLowerCase() === sitio)[0]

    console.log(currentAdress)

    const {form, inputOnChange} = useForm({
        date: "",
        time: "",
        personsNum: "",
        email: "",
    })

   

    const {date, time, personsNum, email} = form;

    // const {adress, tel, openTime } = currentAdress

    console.log(date, time, personsNum, email)
  return (
    <main className="reservation_form_container">
    <h2 className="reservation_form__title ">Reserva Mesa</h2>
    <form className="reservation_form">
        <h3 className="form_title section_space">{sitio[0].toUpperCase() + sitio.substring(1)}</h3>
        <fieldset className='first_fieldset section_space'>
            <p>{currentAdress.adress}</p>
            <p>{currentAdress.openTime}</p>
            <p>{currentAdress.tel}</p>
        </fieldset>
        <fieldset  className='second_fieldset section_space'>
    <label htmlFor="email">Your email:</label> 
    <input type="email" id="email"className="form_control" placeholder="email" name="email"value={email} onChange={inputOnChange} />
     <label htmlFor="date">Select a date:</label>
     <input type="date" id="date"className="form_control" min={`${new Date().getDate()}`} name="date" value={date} onChange={inputOnChange}/>
      <label htmlFor="quantity">Persons Number:</label>
      <input type="number" className="form_control" placeholder="persons number"min="1" max="10"id="quantity"name="personsNum"value={personsNum}onChange={inputOnChange} />
      <label htmlFor="time">Select a time:</label>
       <input type="time" className="form_control" placeholder="what time" id="time" name="time" value={time} onChange={inputOnChange}/>
      </fieldset>

    <button className="reservation_button">Reserva</button>
 </form>

 

  </main>
  )
}
