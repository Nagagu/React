import { Checkbox, Stack } from "@fluentui/react";
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
        <Stack>
          <Checkbox
            className="form-check-input"
            type="checkbox"
            onChange={handleDone}
            id="flexCheckDefault"
          />
        </Stack>
        <span>{description}</span>
      </li>
    </>
  );
}

export default Todo;
