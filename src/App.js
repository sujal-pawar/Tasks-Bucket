import './App.css';
import Navbar from './Components/Navbar';
import Todo from './Components/Todo';
import TodoItems from './Components/TodoItems';
import Footer from './Components/Footer';
import AddTodo from './Components/AddTodo';
import React,{useEffect, useState} from 'react';

function App() {
  let initTodo;
  if(localStorage.getItem("todolist")===null){
    initTodo=[];
  }else {
    initTodo= JSON.parse(localStorage.getItem("todolist"))
  }


  

    const onDelete=(todo)=>{
      setTodolist(todolist.filter((e)=>{
        return e!==todo;
      }))
      localStorage.setItem("todolist",JSON.stringify(todolist));
    }

    const addTodo=(title,desc)=>{
      console.log("i am adding this ToDo !",title,desc);

      const mytodo ={
        title:title,
        description:desc
      }
      console.log(mytodo)
      setTodolist([...todolist,mytodo]);
  }

  const[todolist,setTodolist]=useState([]);
      useEffect(()=>{
        localStorage.setItem("todolist",JSON.stringify(todolist));
      },[todolist]);
    
  return (
    <>
    <Navbar/>
    <AddTodo addTodo={addTodo}/>
    <Todo todo={todolist} onDelete={onDelete} />
    <Footer/>  
    </>
  );
}

export default App;
