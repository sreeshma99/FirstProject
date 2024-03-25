import React, { useState } from 'react'

function Addtask({addTask}) {
 
  const [value,setValue]=useState("");
  const addItem=()=>{
    if (value!=='') {
      addTask(value);
      setValue("");
    }
     
  };

  return (
    <>
    <div className='add-container'>
        <input  
        type='text' 
        placeholder='Add a new task'
        value={value}
        onChange={e=>
          setValue(e.target.value)
        }
        />
        <button  
        onClick={()=>addItem(value)} className='add-btn'>
          ADD
        </button>
    </div>
    </>
  )
}

export default Addtask