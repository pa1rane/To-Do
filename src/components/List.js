import React from 'react'

const List = ({toDoList,handleMoveUp,handleMoveDown,handleDelete,select}) => {
  return (
    <>
      <ul>
        {toDoList.map((toDo,i) => {
     
     const background = toDo.isCompletes ? 'green' : 'none';

            return (
                <div className="listBox" key={i}>
            <li onClick={() => select(i)} style={{background}}>{toDo.text}</li>
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
 