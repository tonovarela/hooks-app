import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

import './MultipleCustomHooks.css'

export const MultipleCustomHooks = () => {
  const {counter,increment}=useCounter(1);    
  const state = useFetch("https://www.breakingbadapi.com/api/quotes/"+counter);

  const { data, loading } = state;
  const { author, quote } = !!data && data[0]


  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr></hr>

      {
        loading
          ? (
            < div className='alert alert-info text-center'>
              Loading...
            </div>
          )
          : (
            <blockquote className="blockquote text-right">
              <p className="mb-0">{quote}</p>
              <footer className="blockquote-footer">{author}</footer>
            </blockquote>

          )
      }

      <button onClick={()=>increment()} className='btn btn-primary'>Siguiente quote</button>




    </>
  )
}
