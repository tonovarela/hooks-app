import React, { useRef } from 'react'
import '../02-useEffect/Effect.css'
export const FocusScreen = () => {
  const inputRef = useRef();  
  const handledClick =()=>{    
    inputRef.current.select();
    console.log(inputRef)
  }
  return (
    <>
    <h1>FocusScreen</h1>
    <hr>
    </hr>
    <input ref={inputRef} className='form-control ' placeholder='Su nombre'></input>
    <button className='btn btn-outline-primary mt-5' onClick={handledClick}>Focus</button>
    </>
  )
}
