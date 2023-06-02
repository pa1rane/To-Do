import React from 'react'

const AddToDo = ({input, handleChange,handleSubmit}) => {
  return (
    <>
      <form onSubmit ={handleSubmit}>
       <input type="text" id='search' placeholder='Add ToDo' autoComplete='off' value={input} onChange={handleChange}/>
       <button type='submit' id='addBtn'>Add</button>
      </form>
    </>
  )
}

export default AddToDo
