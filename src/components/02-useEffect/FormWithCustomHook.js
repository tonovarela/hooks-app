import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import { Message } from './Message';



import './Effect.css';
export const FormWithCustomHook = () => {
    const [formValues,handledInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })
    const { name, email, password } = formValues;

    useEffect(() => {
      console.log("El email cambio");
      
    }, [email])
    
    const handledSubmit= (e)=>{
        e.preventDefault();
        console.log(formValues);

    }
    return (
        <>
            <h1>Form with CustomHook</h1>

            <hr></hr>
            <form onSubmit={handledSubmit}>
            <div className='form-group'>
                <input type="text" name="name"
                    onChange={handledInputChange}
                    className='form-control' placeholder='nombre' autoComplete='off' value={name}></input>
            </div>
            <div className='form-group'>
                <input type="text" name="email"
                    onChange={handledInputChange}
                    className='form-control' placeholder='email' autoComplete='off' value={email}></input>
            </div>
            <div className='form-group'>
                <input type="password" name="password"
                    onChange={handledInputChange}
                    className='form-control' placeholder='******' value={password}></input>
            </div>
            <button type="submit" class="btn btn-primary" onClick={handledSubmit}>Guardar</button>
            </form>
            {name === '123' && <Message></Message>}
        </>
    )
}
