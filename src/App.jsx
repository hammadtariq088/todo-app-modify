import React, { useState } from 'react';
import TasksList from "./TasksList";

const App = () => {

    const [inputlist, setInputList] = useState("");

    const [listitem, setListItem] = useState([]);

    const Submits = (e) => {
        e.preventDefault();
    }

    const eventFunction = (e) => {
        // console.log(e.target.value);
        setInputList(e.target.value);
        
    }

    const addTask = () => {
        setListItem((tasks)=>{
            // console.log(tasks);
            return[...tasks, inputlist] // Array's Old Values + New Value
        });
        setInputList("");

    }

    return (
        <>
            <div className="form-group">
                <h1>To-Do <small>List</small></h1>
                <form role="form" onSubmit={Submits}>
                    <input 
                    type="text" 
                    className="form-control task-field" 
                    placeholder="Enter Your Task 😎" 
                    value={inputlist} 
                    onChange={eventFunction}  />
                    <button type="submit" className="task-button" onClick={addTask}>Add Task 👍</button>
                    {/* {inputlist === "" ?  null : <button type="submit" className="task-button" onClick={addTask}>Add Task 👍</button>} */}
                </form>
                <div className="task-list">
                <h2>Tasks Will Appear Here</h2>
                    <ol class="no-of-lists">
                        {
                            listitem.map((listItem, index)=>{
                                return <TasksList items={listItem} id={index}/>
                            })
                        
                        }
                    </ol>
                </div>
            </div>

        </>
    )

}
export default App;
