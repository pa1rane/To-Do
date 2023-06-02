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
   setToDoList((prev) => [...prev, input])
   setInput('')
 }

  return (
    <>
    <AddToDo input={input} handleChange={handlInputChange} handleSubmit={handleSubmit}/> 
    <List toDoList={toDoList}/>     
    </>
  )
}

export default App
