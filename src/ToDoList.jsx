import React, { useState } from "react"

function ToDoList() {
    // Tasks will be an Array, NewTask will be a string
    const [tasks, setTasks] = useState(["Eat", "Shower", "Rest", "Game", "Code"]);
    const [newTask, setNewTask] = useState("");

    // For the text box when something is typed
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {

    }

    function deleteTask(index) {

    }

    function moveTaskUp(index) {

    }

    function moveTaskDown(index) {

    }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                {/* Text field */}
                <input type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}/>

                {/* Add Button */}
                <button className="add-button" onClick={addTask}>Add</button>
            </div>

            {/* Ordered List */}
            <ol>
                {/* For every task, create a list element */}
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>Up</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>Down</button>
                    </li>
                )}
            </ol>

        </div>
    );
}

export default ToDoList