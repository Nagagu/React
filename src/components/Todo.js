import React from "react";

function Todo({ description }) {
  const handleDone = () => {};
  return (
    <>
      <li class="list-group-item">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        {description}
      </li>
    </>
  );
}

export default Todo;
