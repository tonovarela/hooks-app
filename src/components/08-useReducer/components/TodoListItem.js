import React from 'react'

export const TodoListItem = ({ todo, index, handledDelete, handledToogle }) => {
  return (
    <>
      <li className='list-group-item' key={todo.id}  >
        <p className={`${todo.done && 'complete'}`} 
        onClick={() => handledToogle(todo.id)}>{index + 1}.-{todo.desc} </p>
        <button onClick={() => handledDelete(todo.id)} 
        className='btn btn-danger'>Borrar</button>
      </li>
    </>
  )
}
