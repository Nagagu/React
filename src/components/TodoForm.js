import React, { useRef, useState } from "react";

//onsole.log(todoList);
function TodoForm() {
  const CreateNewTodo = (desc) => {
    return {
      id: new Date().getTime(),
      desc: desc,
      done: false,
    };
  };

  const [newItem, setNewItem] = useState("");

  const [todoList, setTodoList] = useState([
    // "Comprar leche",
    // "Bajar la basura",
    // "Sacar al perro",
    // "Ir al gimnasio",
  ]);

  const handleAddTodo = () => {
    setTodoList([...todoList, CreateNewTodo(newItem)]);
    setNewItem("");
  };

  const onChangeNewItem = (event) => {
    event.preventDefault();
    setNewItem(event.target.value);
  };

  const onChangeCheckBox = (event) => {
    //event.preventDefault();
    //event.target.checked;
  };

  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <ul>
        {todoList.map((todo) => (
          <li>
            <input
              type="checkbox"
              // checked={todo.done}
              onChange={onChangeCheckBox}
            />
            {todo.desc}
          </li>
        ))}
      </ul>
      <input value={newItem} onChange={onChangeNewItem} />
      <button className="btn btn-primary ml-3" onClick={handleAddTodo}>
        Añadir
      </button>
    </div>
  );
}

export default TodoForm;
