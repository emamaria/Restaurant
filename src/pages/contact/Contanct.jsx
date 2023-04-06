import React, { useState } from 'react'
import { Link } from 'react-router-dom';



const Contanct = () => {

  const [okSubmit, setOkSubmit] = useState(false)

const initialValue = {
  name: "",
  email: "",
  telephone: "",
  message: "",
  checked: ""
}

  const [contactForm, setContactForm] = useState(initialValue);

  console.log("mi form", contactForm)

  const handleChange = (e) => {
    const {value, name } = e.target
    
    setContactForm({...contactForm,[name]:value})
  }

  const {name, email, checked, message, telephone} = contactForm;
  
  const formSubmit = (e) => {
    e.preventDefault()
    setContactForm(initialValue)

    setOkSubmit(true)
       
       
    console.log(okSubmit)
    setTimeout(() => {
     setOkSubmit(false)
    }, 5000);
  }
  
  return (
    <main className="contact_container">
      <h2 className="contact_title">Contacto</h2>
     
      <form onSubmit={formSubmit}  className='contact_form'>
      <p className="contact_message">Contacte con nosostros rellenado nuestro formulario.</p>
         <label  htmlFor="name" >Nombre</label>
         <input required type="text" name="name" value={name} id="name" onChange={handleChange}/>
         <label htmlFor="email" >Email</label>
         <input required type="email" name="email" value={email} id="email" onChange={handleChange}/>
         <label htmlFor="tel" >Teléfono</label>
         <input  required type="tel" name="telephone" value={telephone} id="tel" onChange={handleChange}/>
         <label htmlFor="message" >Mensaje</label>
         <textarea  rows="4"   required type="text" value={message} name="message" id="message" onChange={handleChange}>
          </textarea>
           <div className='checkbox_container'>
         <input required type="checkbox" id="check" onChange={handleChange}/>
         <label htmlFor="check" value={checked} onChange={handleChange}>He leído y acepto la <Link>politica de proteccion de datos</Link></label>
         </div>

         <span className={(okSubmit === false)?"no_submit":"ok_submit"}>Nos pondremos en contacto lo antes posible.</span>
          <button className="contact_submit_button" >Enviar</button>
      </form>
    </main>
  )
}

export default Contanct