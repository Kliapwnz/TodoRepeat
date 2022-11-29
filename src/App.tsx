import React, {useState} from 'react';
import './App.css';
import {tasksPropsType, Todolist} from "./Todolist";

export type filterValueType = "all" | "completed" | "active"

function App() {
    let [task, setTask] = useState<Array<tasksPropsType>>([
        {id: 1, title: "Html&CSS", isDone: true},
        {id: 2, title: "JS", isDone: false},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Football", isDone: true},
        {id: 5, title: "Hockey", isDone: false}
    ])
    let [filter, setFilter] = useState<filterValueType>("all")

    let removeTask = (id: number) => {
        let filteredTask = task.filter(t => t.id != id)
        setTask(filteredTask)
    }

    let changeFilter = (value: filterValueType) => {
        setFilter(value)
    }

    let taskForTodolist = task;
    if (filter === "completed") {
        taskForTodolist = task.filter(t => t.isDone === true)
    }
    if (filter === "active") {
        taskForTodolist = task.filter(t => t.isDone === false)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={taskForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
