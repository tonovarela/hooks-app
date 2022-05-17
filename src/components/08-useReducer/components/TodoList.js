import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos,handledDelete,handledToogle}) => {
  return (
      <>
      <ul className='list-group list-group-flush'>
            {
              todos.map((todo, index) =>
              (
                <TodoListItem key={index} handledDelete={handledDelete} handledToogle={()=>handledToogle(todo.id)} index={index} todo={todo}></TodoListItem>
              )
              )
            }

          </ul>
      </>
  )
}
