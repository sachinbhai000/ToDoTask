import React from "react";

function TodoList({ todos, deleteTodo }) {
  return (
    <ul style={{ paddingTop: "10px" }}>
      {todos.map((todo, index) => (
        <li key={index}>
          <span style={{}}>{todo.text}</span>

          <button
            variant="secondary"
            onClick={() => deleteTodo(index)}
            style={{ marginLeft: "60px", marginBottom: "10px" }}
          >
            {" "}
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
