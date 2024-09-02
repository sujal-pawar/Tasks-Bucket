import React from 'react'
import TodoItems from './TodoItems'

const Todo = (props) => {
    return (
        <div className="container text-center">
            <hr />
            <h2>To Do List</h2>
            {props.todo.length===0 && <p>Bucket Empty !</p>}
            
            <div className="container">
            <div className="row ">
                
                    {props.todo.map((todo) => {
                        return <div className='col-md-4 my-3'><TodoItems  todo={todo} key={todo.sn} onDelete={props.onDelete}/></div>
                    })}
                
            </div>
            </div>
        </div>
    )
}




export default Todo;
