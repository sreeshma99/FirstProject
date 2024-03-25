import React, { useState } from 'react';
import './Todo.css'
import Addtask from './Addtask';
import ListTask from './ListTask';


function Todo() {
  const[tasks,setTasks]=useState([]);
 
  const addTask=(title)=>{
    const newTask=[...tasks,{title}];
    setTasks(newTask);
  }

  const removeTask=(index)=>{
    const newTask=[...tasks];
    newTask.splice(index,1);
    setTasks(newTask);
  }
  
  return (
    <>
        <div className='todo-container'>
        <div className='header'>
            Todo APP
            </div>
        <div className='task-add'>
            <Addtask addTask={addTask}/>
        </div>
        <div className='tasks'>
          {tasks.map((task,index,value)=>(
            <>
            <ListTask task={task} removeTask={removeTask} index={index}/>
            </>
          
          ))}
           
        </div>
        </div>
    </>
  )
}

export default Todo