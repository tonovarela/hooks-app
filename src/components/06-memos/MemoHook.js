import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'

import '../02-useEffect/Effect.css'
import { procesoPesado } from '../helpers/procesoPesado';

export const MemoHook = () => {
    const { counter, increment } = useCounter(500);
    const [show, setShow] = useState(true);

    

    const memoProcesoPesado=useMemo(() =>procesoPesado(counter) , [counter])

    return (
        <>
            <h3>Counter MemoHook:<small>{counter}</small> </h3>
            <p>{memoProcesoPesado}</p>
            <button className='btn btn-primary' onClick={() => { increment() }}>Incrementar</button>
            <button className='btn btn-outline-secondary ml-3' onClick={() => { setShow(!show) }}>{JSON.stringify(show)}</button>
        </>
    )
}
