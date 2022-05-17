import React, { useCallback, useState } from 'react'

import '../02-useEffect/Effect.css';
import { ShowIncrement } from './ShowIncrement';


export const CallBackHook = () => {

    const [counter, setCounter] = useState(10)
    // const incrementar=()=>{
    //     setCounter(counter+1)
    // }
    const incrementar = useCallback(
        (num) => {
            setCounter(c=>c + num)
        },
        [setCounter],
    )

    return (
        <>
            <h1>CallBackHook {counter}</h1>
            <hr>
            </hr>
            <ShowIncrement increment={incrementar}></ShowIncrement>
        </>
    )
}
