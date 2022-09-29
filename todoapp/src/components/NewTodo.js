import React, { useState } from "react";

export default function NewTodo() {
    const [inputTask, setInputTask] = useState({});
    const [tasks, setTasks] = useState([]);
    const [count, setCount] = useState(1);
    const [updateText, setUpdateText] = useState("")

    const handleAdd = () => {
        setTasks([...tasks, inputTask]);
        setInputTask({ 'text': '' })
        setCount(count + 1)
    }

    const makeEditable = (thisTask) => {
        let newTasks = [];
        tasks.map((task) => {

            let editable = false;
            if (task.id === thisTask.id) {
                editable = true
            }
            newTasks.push({
                ...task,
                isEditable: editable
            });
        });
        setTasks(newTasks)
    };

    const updateTaskAndMakeReadOnly = (thisTask) => {
        let newTasks = [];
        tasks.map((task) => {
            let text = task.text;
            if (task.id === thisTask.id) {
                text = updateText
            }
            newTasks.push({
                ...task,
                text: text,
                isEditable: false
            });
        });
        setTasks(newTasks);
    };

    return (
        <>
            <h1>TO DO LIST</h1>
            <input type="text" className="input1" value={inputTask.text} onChange={(e) => { setInputTask({ 'id': count, 'text': e.target.value, 'isEditable': false }) }}/>
            <button className="btn" onClick={handleAdd}>Add task</button>
            <div className="container">
                {tasks.map((task) => (
                    <div className="innercontainer" key={task.id}>
                        {
                            task.isEditable ?
                                <input type="text" className="input" defaultValue={task['text']} onChange={(event) => setUpdateText(event.target.value)} />
                                :
                                <p>{task['text']}</p>
                        }

                        <button className="deleteBtn"
                            onClick={() => {
                                let filteredItems = tasks.filter((x) => x !== task);
                                setTasks([...filteredItems])
                            }}>
                            Delete Task
                        </button>
                        <button className="editBtn" onClick={(event) => {
                            if (task.isEditable) {
                                updateTaskAndMakeReadOnly(task)
                                event.target.innerText = 'Edit Task'
                            } else if (!task.isEditable) {
                                makeEditable(task);
                                event.target.innerText = 'Save Task'
                            }

                        }}>Edit Task</button>
                    </div>

                ))}
            </div>
        </>
    );
}