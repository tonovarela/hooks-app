import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

  const {setUser} = useContext(UserContext)
  return (
    <>
    <h1>About</h1>
    <hr></hr>
    <button class="btn btn-primary" onClick={()=>{
      setUser({
        id:55,
        name:"Desde al about"
      })
    }}>Cambiar</button>
    </>
  )
}
