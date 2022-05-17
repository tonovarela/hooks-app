import React, { useState } from 'react'
import '../02-useEffect/Effect.css'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'
export const RealExampleRef = () => {
    const [show, setShow] = useState(false);


  return (
      <>
      <h1>RealExampleRef</h1>
      <hr>
      </hr>
      {show && <MultipleCustomHooks></MultipleCustomHooks>}
      <br></br>

    <button className='btn btn-outline-primary mt-5' onClick={()=>{ setShow(!show)}}>Toogle</button>
      </>
  )
}
