import React, {useState} from 'react';
import './App.css';
import {tasksPropsType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type filterValueType = "all" | "completed" | "active"

function App() {
    let [task, setTask] = useState<Array<tasksPropsType>>([
        {id: v1(), title: "Html&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: false},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Football", isDone: true},
        {id: v1(), title: "Hockey", isDone: false}
    ])
    let [filter, setFilter] = useState<filterValueType>("all")

    let removeTask = (id: string) => {
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
