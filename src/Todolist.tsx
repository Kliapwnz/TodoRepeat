import React, {useState} from 'react';
import {filterValueType} from "./App";

type PropsType = {
    title: string
    tasks: tasksPropsType[]
    removeTask: (taskId: string) => void
    changeFilter:(value: filterValueType)=>void
    addTask:(title:string)=> void
}
export type tasksPropsType = {
    id: string
    title: string
    isDone: boolean
}


export const Todolist = (props: PropsType) => {
    let [title, setTitle] = useState("")

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title} onChange={(event)=>{setTitle(event.currentTarget.value)}}/>
                <button onClick={()=>{props.addTask(title)}}>+</button>
            </div>
            <ul>
                {props.tasks.map(el => <li key={el.id}>
                        <button onClick={() => {
                            props.removeTask(el.id)
                        }}>X
                        </button>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                    </li>
                )}
            </ul>
            <div>
                <button onClick={()=>{props.changeFilter("all")}}>All</button>
                <button onClick={()=>{props.changeFilter("active")}}>Active</button>
                <button onClick={()=>{props.changeFilter("completed")}}>Completed</button>
            </div>
        </div>
    );
};

