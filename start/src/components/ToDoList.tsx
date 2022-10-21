import { useState } from "react";

export const ToDoList = () => {

    const inputTask = document.querySelector('#input') as HTMLInputElement;
    const taskContainer = document.querySelector(".task-container")
    const [tasks, setTasks] = useState<string[]>([])
    const [newTask, setNewTask] = useState<string>("")


    const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setNewTask(e.target.value)

    }

    const addTask:React.MouseEventHandler<HTMLButtonElement> = () => {
        setTasks([...tasks, newTask])
    }


    return ( 
        <div className="to-do-list-container">
            
            
                <div className="input-button-container">

                    <input 
                        id="input"
                        className="input-text" 
                        type="text" 
                        placeholder="water the plants"
                        onChange={handleChange}
                        />
                        
                    <button className="input-submit" onClick={addTask}>Add</button>

                </div>

                {tasks.map((task) => <div className="task-container" id={task}>{task}</div> )}
                
        </div>

     )
}
 
 
