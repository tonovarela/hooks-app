import React, { useEffect, useState } from 'react'
import './Effect.css';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })

  const { name, email } = formState;
  useEffect(() => {
    //console.log('Hey');
  },[]);


  useEffect(() => {
    //console.log('FormState cambio');
  },[formState]);


  useEffect(() => {
    //console.log('email cambio');
  },[email]);

  const handledInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }


  return (
    <>
      <h1>Use-Effect</h1>

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
     {name==='123' && <Message></Message>}
    </>
  )
}
