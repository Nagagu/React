import React, { useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

function Form() {
  const [showTodoDiv, setShowAddTodoDiv] = useState(false);

  const handleShowAddTodo = () => {
    setShowAddTodoDiv(!showTodoDiv);
  };

  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>Todo App</h1>
      <hr />
      <button onClick={handleShowAddTodo} className="btn btn-primary">
        + Añadir
      </button>
      {showTodoDiv ? <TodoAdd todos={todos} setTodos={setTodos} /> : null}

      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default Form;
