import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './Counter.css'
export const CounterWithCustomHook = () => {
    const { state, increment, decrement, reset } = useCounter(100);
    return (
        <>
            <h1>Counter With hook:{state}</h1>
            <hr></hr>
            <button className='btn btn-primary' onClick={() => increment()}>+1</button>
            <button className='btn btn-primary ' onClick={() => reset()}>Reset</button>
            <button className='btn btn-primary ' onClick={() => decrement()}>-1</button>
            <hr></hr>


        </>
    )
}
