import React, { useEffect, useReducer } from 'react'
import { TodoAdd } from './components/TodoAdd'
import { TodoList } from './components/TodoList'
import { todoReducer } from './todoReducer'
import './style.css'


const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);
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

  const handledAddTodo = (newTodo) => {
    dispatch({type: "add",payload: newTodo});
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
          <TodoAdd handledAddTodo={handledAddTodo}></TodoAdd>
        </div>
      </div>
    </>
  )
}
