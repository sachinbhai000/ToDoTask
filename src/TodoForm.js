import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [todoText, setTodoText] = useState("");
  const [color, setColor] = useState("#ffffff");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) return;
    addTodo({ text: todoText, color });
    setTodoText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new todo"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />{" "}
        <button varaint="secondary" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
