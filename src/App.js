import React, { useState } from 'react';
import AddToDo from './components/AddToDo';
import List from './components/List';

const App = () => {

 const [input, setInput] = useState('');
 const [toDoList, setToDoList] = useState([]);
  
 const handlInputChange = (e) => {
   setInput(e.target.value)
 }

 const handleSubmit = (e) => {
    e.preventDefault();
    if(input !== ""){
   setToDoList((prev) => [...prev, {text: input , isCompletes: false}])
    }
   setInput('')
 }

 const handleMoveUp = (index) => {
  if(index > 0) {
   setToDoList((prevList) => {
    const updatedList = [...prevList];
    [updatedList[index], updatedList[index - 1]] = [updatedList[index -1], updatedList[index]]
    return updatedList;
   })
  }
 }

 const handleMoveDown = (index) => {
  if(index < toDoList.length - 1) {
  setToDoList((prevList) => {
    const updatedListDown = [...prevList];
    [updatedListDown[index], updatedListDown[index + 1]] = [updatedListDown[index + 1], updatedListDown[index]]
    return updatedListDown
  })
 }
 } 

 const handleDelete = (index) => {
    setToDoList((prevList) => {
      const deleteItem = [...prevList]
      const updatedList = deleteItem.filter((item,i) => i !== index)
      return updatedList
    })
 }

 const handleSelected = (index) => {
    setToDoList((prevList) => {
      const selectList = [...prevList]
      selectList[index] = {
        ...selectList[index],
       isCompletes : !selectList[index].isCompletes
      }
       return selectList
    })
 }

  return (
    <>
    <AddToDo input={input} handleChange={handlInputChange} handleSubmit={handleSubmit}/> 
    <List toDoList={toDoList} handleMoveUp={handleMoveUp} handleMoveDown={handleMoveDown} handleDelete={handleDelete} select={handleSelected}/>     
    </>
  )
}

export default App
