import React from 'react'
import Todo from './Todo'
const TodoItems = ({todo,onDelete}) => {
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{todo.title}</h5>
                    <p className="card-text">{todo.description}</p>
                </div>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Done</button>
            </div>
        </div>
    )
}

export default TodoItems
