import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Todo from './Components/Todo';
import TodoItems from './Components/TodoItems';
import Footer from './Components/Footer';
import AddTodo from './Components/AddTodo';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";

function App() {

  let initTodo;

  if (localStorage.getItem("todolist") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todolist"));
  }

  const [todolist, setTodolist] = useState(initTodo);

  const onDelete = (todo) => {
    const updatedTodolist = todolist.filter((e) => {
      return e !== todo;
    });
    setTodolist(updatedTodolist);
  }

  const addTodo = (title, desc) => {
    const mytodo = {
      title: title,
      description: desc
    };
    setTodolist([...todolist, mytodo]);
  }
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todo todo={todolist} onDelete={onDelete} />
            </>
          } />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
