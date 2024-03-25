import React,{useState} from 'react'
import Addtask from './Addtask';

function EditTask(editTask,id) {
    const [value,setValue]=useState("");

    const editItem=()=>{
      if (value!=='') {
        setValue(value)
        editTask(value);
        setValue("");
      }
       
    };
  
    return (
      <>
      {/* <div className='add-container'>
          <input  
          type='text' 
          placeholder='Edit a new task'
          value={value}
          onChange={e=>
            setValue(e.target.value)
          }
          />
          <button  
          onClick={()=>editItem(value)} className='edit-btn' id='editbtn'>
            Edit
          </button>
      </div> */}
      {id==='editbtn'?<EditTask editItem={editItem}/>:<Addtask/>}
      </>
    )
}

export default EditTask;