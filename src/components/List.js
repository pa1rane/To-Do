import React from 'react'

const List = ({toDoList}) => {
  return (
    <>
      <ul>
        {toDoList.map((toDo,i) => {
            return <li key={i}>{toDo}</li>
        })}
      </ul>
    </>
  )
}

export default List
