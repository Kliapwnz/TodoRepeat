import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
   const task1 =[
       {id:1, title:"Html&CSS", isDone: true },
       {id:2, title:"JS", isDone: false },
       {id:3, title:"React", isDone: false }
   ]


    return (
        <div className="App">
           <Todolist title="What to learn" tasks={task1}/>
        </div>
    );
}

export default App;
