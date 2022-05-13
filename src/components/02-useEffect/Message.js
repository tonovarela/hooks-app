
import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 })
    const { x, y } = coords;
    useEffect(() => {
        const mouseMove = ({ x, y }) => {
            const _coords = { x, y };
            setCoords(_coords);
        };
        window.addEventListener('mousemove', mouseMove)
        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])


    return (
        <>
            <div>Varela</div>
            <p>x:{x}, y:{y}</p>
        </>
    )
}
