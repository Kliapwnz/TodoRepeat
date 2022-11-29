import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    let task1 = [
        {id: 1, title: "Html&CSS", isDone: true},
        {id: 2, title: "JS", isDone: false},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Football", isDone: true},
        {id: 5, title: "Hockey", isDone: false}
    ]
    let removeTask = (id: number) => {
        task1 = task1.filter(t => t.id != id)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={task1}
                      removeTask={removeTask}
            />
        </div>
    );
}

export default App;
