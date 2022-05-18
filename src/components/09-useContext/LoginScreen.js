import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  const {setUser} = useContext(UserContext);
  return (
    <>
    <h1>LoginScreen</h1>
    <hr></hr>
    <button onClick={()=>{
     setUser({id:123,name:"Varela"})
    }} className='btn btn-primary'>Login</button>
    </>
  )
}
