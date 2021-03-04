import React from "react";

function Todo({ description, todos, todo, setTodos }) {
  const handleDone = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, done: !item.done };
        }
        return item;
      })
    );
  };
  return (
    <>
      <li className={`list-items ${todo.done ? "completed" : ""}`}>
        <input
          className="form-check-input"
          type="checkbox"
          onChange={handleDone}
          id="flexCheckDefault"
        />
        {description}
      </li>
    </>
  );
}

export default Todo;
