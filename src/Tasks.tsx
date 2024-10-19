import React from 'react';
import { DataPropsType } from './App';

type TaskPropsType = {
    data: DataPropsType
}

export const Tasks = (props: TaskPropsType)=> {
    return (
        <div>
            <h1>{props.data.title}</h1>
            <ul>
                {props.data.tasks.map((el)=>{
                    return (
                        <li key={el.taskId}><input type="checkbox" checked={el.isDone} readOnly={true}/><span>{el.title}</span></li>
                    )
                })}
            </ul>
            <ul>
                {props.data.students.map((task)=> {
                    return (
                        <li key={Math.random()}>{task}</li>
                    )
                })}
            </ul>
        </div>
    )
}