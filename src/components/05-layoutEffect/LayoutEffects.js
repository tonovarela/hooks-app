import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

import './Layout.css'

export const Layout = () => {
  const {counter,increment}=useCounter(1);    
  const state = useFetch("https://www.breakingbadapi.com/api/quotes/"+counter);
    
  
const [boxSize, setBoxSize] = useState({})
  const { data } = state;
  const {  quote } = !!data && data[0]

  const pTag = useRef();
  useLayoutEffect(()=>{
      setBoxSize(pTag.current.getBoundingClientRect())      
  },[quote])

  return (
    <>
      <h1>Layout</h1>
      <hr></hr>

            
            <blockquote className="blockquote text-right">
              <p ref={pTag} className="mb-0">{quote}</p>
              <br></br>               
            </blockquote>
            <pre>
                {JSON.stringify(boxSize,null,3)}
            </pre>
            
      <button onClick={()=>increment()} className='btn btn-primary'>Siguiente quote</button>




    </>
  )
}
