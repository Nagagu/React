import React, { useEffect, useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import { DefaultButton, PrimaryButton } from "@fluentui/react";

function Form() {
  const [showTodoDiv, setShowAddTodoDiv] = useState(false);
  const [showAllTodos, setShowAllTodos] = useState(true);

  const handleShowAddTodo = () => {
    setShowAddTodoDiv(!showTodoDiv);
  };

  const handleShowUndoneTodos = () => {
    setShowAllTodos(false);
  };

  const handleShowAllTodos = () => {
    setShowAllTodos(true);
  };

  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1>Todo App</h1>
      <hr />
      {showTodoDiv ? (
        <>
          <TodoAdd todos={todos} setTodos={setTodos} />
          <DefaultButton onClick={handleShowAddTodo} className="cancelButton">
            Cancelar
          </DefaultButton>
        </>
      ) : (
        <PrimaryButton onClick={handleShowAddTodo}>+ Añadir</PrimaryButton>
      )}

      <TodoList
        todos={
          showAllTodos ? todos : todos.filter((item) => item.done == false)
        }
        setTodos={setTodos}
      />
      <DefaultButton onClick={handleShowAllTodos}>Mostrar todas</DefaultButton>
      <DefaultButton onClick={handleShowUndoneTodos}>
        Tareas pendientes
      </DefaultButton>
    </>
  );
}

export default Form;
