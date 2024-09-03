import React, { useState } from 'react'

const AddTodo = (props) => {

    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title & Description can't be empty.")
        }else{
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");
        }
    }

    return (

        <>
            <div className="d-flex justify-content-center align-items-center ">
                <div className="card p-4 m-2" style={{ width: "300px" }}>
                    <h4 className="card-title text-center mb-4">Add New Task</h4>
                    <form onSubmit={submit}>
                        <div className="mb-3">
                            <label htmlFor="taskTitle" className="form-label">Task Title</label>
                            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="taskTitle" placeholder="Enter title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="taskDescription" className="form-label">Description</label>
                            <input type="text" className="form-control" onChange={(e)=>{setDesc(e.target.value)}} value={desc} id="taskDescription" placeholder="Enter description" />
                        </div>
                        <button type="submit" className="btn btn-success w-100">Add Task</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddTodo;
