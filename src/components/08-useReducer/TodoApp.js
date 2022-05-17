import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm'
import { TodoList } from './components/TodoList'
import './style.css'
import { todoReducer } from './todoReducer'


const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];

}
export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [{ description }, handledInputChange, reset] = useForm({
    description: ''
  })
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handledDelete = (todoID) => {
    const action = {
      type: 'delete',
      payload: todoID
    }
    dispatch(action);

  }


  const handledToogle = (todoID) => {
    dispatch({ type: "toggle", payload: todoID });
  }

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (description.trim().length === 0) return;
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    }
    const action = {
      type: "add",
      payload: newTodo
    }
    dispatch(action);
    reset();

  }


  return (
    <>
      <h1>TodoApp  ({todos.length})  </h1>
      <hr>
      </hr>
      <div className='row'>
        <div className='col-7'>
          <TodoList handledDelete={handledDelete} handledToogle={handledToogle} todos={todos}></TodoList>
        </div>
        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr></hr>
          <form onSubmit={handleAddTodo}>
            <input value={description} onChange={handledInputChange} type="text" name='description' autoComplete='off' placeholder='Aprender ...' className='form-control'></input>
            <button type='submit' className='btn btn-outline-primary  btn-block mt-1'>Agregar</button>
          </form>
        </div>
      </div>

    </>
  )
}
