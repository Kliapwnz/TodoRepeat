import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
   const task1 =[
       {id:1, title:"Html&CSS", isDone: true },
       {id:2, title:"JS", isDone: false },
       {id:3, title:"React", isDone: false }
   ]
    const task2 =[
        {id:1, title:"Hello World!", isDone: true },
        {id:2, title:"Yo", isDone: false },
        {id:3, title:"Manchester City", isDone: true }
    ]


    return (
        <div className="App">
           <Todolist title="What to learn" tasks={task1}/>
           <Todolist title="Repeat" tasks={task2}/>
        </div>
    );
}

export default App;
