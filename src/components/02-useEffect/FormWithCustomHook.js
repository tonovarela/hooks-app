import React from 'react'
import { useForm } from '../../hooks/useForm';
import { Message } from './Message';



import './Effect.css';
export const FormWithCustomHook = () => {
    const {formValues,handledInputChange} = useForm({
        name: '',
        email: '',
        password: ''
    })
    const { name, email, password } = formValues;
  
    return (
        <>
            <h1>Form with CustomHook</h1>

            <hr></hr>
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
            {name === '123' && <Message></Message>}
        </>
    )
}
