import React from 'react'

const List = ({toDoList,handleMoveUp,handleMoveDown,handleDelete,mark}) => {
  return (
    <>
      <ul>
        {toDoList.map((toDo,i) => {
            return (
                <div className="listBox" key={i}>
            <li onClick={() => mark(i)}>{toDo}</li>
            <button id='upBtn' onClick={() => handleMoveUp(i)} >Up</button>
            <button id='downBtn' onClick={() => handleMoveDown(i)}>Down</button>
            <button id='delBtn'onClick={() => handleDelete(i)}>Delete</button>
            </div>
            )
        })}
      </ul>
    </>
  )
}

export default List
 