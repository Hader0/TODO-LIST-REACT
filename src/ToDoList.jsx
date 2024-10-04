import React, { useState, useEffect } from "react";

function ToDoList() {
    // Load tasks from localStorage if they exist, otherwise use default tasks
    const initialTasks = JSON.parse(localStorage.getItem("tasks")) || ["Eat", "Shower", "Rest", "Game", "Code"];
    
    // Tasks will be an Array, NewTask will be a string
    const [tasks, setTasks] = useState(initialTasks);
    const [newTask, setNewTask] = useState("");

    // Update localStorage whenever tasks change
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // For the text box when something is typed
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            // Updating the tasks with the new task
            setTasks(t => [...t, newTask]);
            setNewTask(""); // The input field is cleared after the task is added
        }
    }

    function deleteTask(index) {
        const updatedTask = tasks.filter((_, i) => i !== index); // "_" is a way to ignore
        setTasks(updatedTask);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                {/* Text field */}
                <input 
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                />

                {/* Add Button */}
                <button className="add-button" onClick={addTask}>Add</button>
            </div>

            {/* Ordered List */}
            <ol>
                {tasks.map((data, index) => 
                    <li key={index}>
                        <span className="text">{data}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>Up</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>Down</button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList;
