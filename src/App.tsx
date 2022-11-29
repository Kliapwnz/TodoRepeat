import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    let [task, setTask] =useState( [
        {id: 1, title: "Html&CSS", isDone: true},
        {id: 2, title: "JS", isDone: false},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Football", isDone: true},
        {id: 5, title: "Hockey", isDone: false}
    ])
    let removeTask = (id: number) => {
       let filteredTask = task.filter(t => t.id != id)
        setTask(filteredTask)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={task}
                      removeTask={removeTask}
            />
        </div>
    );
}

export default App;
