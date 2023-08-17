import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ padding: "30px" }}>
      <Card
        style={{
          width: "18rem",
          height: "20rem",
          backgroundColor: "lightblue",
          marginLeft: "200px",
        }}
      >
        <Card.Body>
          <Card.Title>To Do List</Card.Title> <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
