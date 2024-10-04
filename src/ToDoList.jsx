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
        if(newTask.trim() !== "") // If the newTask (The text in the input field) does not equal an empty string, add the task
            // Updating the tasks with the new task - task is represented as "t"
            setTasks(t => [...t, newTask]);
            setNewTask(""); // The input field is cleared after the task is added
    }

    function deleteTask(index) {
        // If the current index ("i") is not equal to the index we would like to delete, append to new array
        const updatedTask = tasks.filter((_, i) => i !== index); // "_" is a way to ignore
        setTasks(updatedTask);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            // Array destructuring to swap two elements within an array
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            // Array destructuring to swap two elements within an array
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
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