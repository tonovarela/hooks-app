import React from 'react'
import { useForm } from '../../../hooks/useForm'

export const TodoAdd = ({ handledAddTodo }) => {
    const [{ description }, handledInputChange, reset] = useForm({
        description: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length === 0) return;
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        handledAddTodo(newTodo)
        reset();

    }
    return (
        <>
            <h4>Agregar TODO</h4>
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <input value={description} onChange={handledInputChange} type="text" name='description' autoComplete='off' placeholder='Aprender ...' className='form-control'></input>
                <button type='submit' className='btn btn-outline-primary  btn-block mt-1'>Agregar</button>
            </form>
        </>
    )
}
