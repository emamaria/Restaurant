import { useState } from 'react'

export const useForm = (formInputValue = {}) => {

    const [form, setForm]  = useState({formInputValue})

    const inputOnChange  = (event) => {
        const {value, name} = event.target;

        setForm({...form, [name]:value})
    }


  return {

    form,
    inputOnChange

  }
}
