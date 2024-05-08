import React, { useState } from "react";
import './Todo.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";



const Todo = () =>
{
    const[task,setTasks] = useState([]);
    const[newTask,setNewtask] = useState("");

    const inputtask = (event) =>{
        setNewtask(event.target.value);
    }

    const handleKeyUp = (event) => {
        if(event.key==='Enter')
            {
                addNewtask();
            }
    }

    const addNewtask= ()=>{
        if(!task.includes(newTask) && newTask !== ""){
            setTasks(t => [...t,newTask]);
            setNewtask("");
        }
        else if(task.includes(newTask))
        {
            window.alert("Task already exist");
        }
    }

    const deleteTask = (index) =>{
        const updatedTask = task.filter((_,i) => i !== index);
        setTasks(updatedTask);
    }

    return(
        <>
        
         <h1>To-Do List</h1>
        <div className="todo-view">
           <div className="form">
            <input 
                type="text"
                placeholder="Enter a task"
                id="input"
                value={newTask}
                onKeyUp={handleKeyUp}
                className="input"
                onChange={inputtask}>
            </input>
            <button
                className="add-button"
                type="button"
                onClick={addNewtask}
                 >
                    Add
            </button>
        
        <ol>
            
            {task.map((task,index) =>
                <li key={index}>
                    <span contentEditable="true" className="task-view">{task}</span>
                    <button
                    className="delete-button"
                    onClick={()=> deleteTask(index)}
                     >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </li>
            
        )} 
        </ol>
        </div>
        </div>
        </>
    );
}

export default Todo;