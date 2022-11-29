import React, {useState} from 'react';
import './App.css';
import {tasksPropsType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type filterValueType = "all" | "completed" | "active"

function App() {
    let [tasks, setTask] = useState<Array<tasksPropsType>>([
        {id: v1(), title: "Html&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: false},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Football", isDone: true},
        {id: v1(), title: "Hockey", isDone: false},
    ])

    let addTask =()=>{
        let task ={id:v1(), title:"Hi all", isDone:false}
        let newTask =[task,...tasks];
        setTask(newTask);

    }

    let [filter, setFilter] = useState<filterValueType>("all")

    let removeTask = (id: string) => {
        let filteredTask = tasks.filter(t => t.id != id)
        setTask(filteredTask)
    }

    let changeFilter = (value: filterValueType) => {
        setFilter(value)
    }

    let taskForTodolist = tasks;
    if (filter === "completed") {
        taskForTodolist = tasks.filter(t => t.isDone === true)
    }
    if (filter === "active") {
        taskForTodolist = tasks.filter(t => t.isDone === false)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={taskForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
        </div>
    );
}

export default App;
