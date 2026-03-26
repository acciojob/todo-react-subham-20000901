import {useState} from 'react';
import React from "react";
import './../styles/App.css';

const App = () => {
  const [task,setTask] = useState('');
  const [todos,setTodos] = useState([]);
  function addTodo(){
    setTodos([...todos,task]);
    setTask("");
  }
  function deleteBtn(indexToDelete){
    const newTodos = todos.filter((_,index) => index !== =indexToDelete);
    setTodos(newTodos);
  }
    return (
    <div>
        {/* Do not remove the main div */}
    <input 
      type="text" 
      placeholder="Entera task"
      onChange = {(e) => setTask(e.target.value)} 
        />
    <button onClick={addTodo}>Add Todo</button>
    <ul>
      {todos.map((todo,index) => {
        return (
          <li key={index}>
           {todo}
          <button onClick={() => deleteBtn(index)}>Delete</button>
        </li>
          
        )
      })}   
    </ul>
    </div>
  )
}

export default App
