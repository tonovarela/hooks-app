import React, { useState } from 'react'

import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'
import '../02-useEffect/Effect.css'

export const Memorize = () => {
const {counter,increment}= useCounter(10);
const [show, setShow] = useState(true);

  return (
      <>
      <h1>Memorize</h1>
      <h1>Counter:<Small value={counter}></Small></h1>
      <button className='btn btn-primary' onClick={()=>{increment()}}>Incrementar</button>
      <button className='btn btn-outline-secondary ml-3' onClick={()=>{setShow(!show)}}>{JSON.stringify(show)}</button>
      </>
  )
}
