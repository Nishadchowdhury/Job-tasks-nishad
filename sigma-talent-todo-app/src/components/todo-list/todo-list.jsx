import * as React from "react";
import { Checkbox } from "../checkbox/checkbox";
import { TodosContext } from "../../todo-context";
import "./todo-list.css";

export const TodoList = () => {
  const [todos, setTodos] = React.useContext(TodosContext);
  const LiveList = [...todos]

  const handleDelete = (id) => {

    const exist = todos.filter(data => data.id !== id)
    setTodos(exist)
    console.log(exist);

  };

  const toggleCheck = (id) => {

    const change = (task) => {

      return {
        id: task.id,
        checked: !task.checked,
        label: task.label,
      }
    }

    const toggle = todos.find(data => data.id === id)

    const rest = todos.filter(data => data.id !== id)

    const data = [...rest, change(toggle)]


    setTodos(data.sort((a, b) => {
      return a.id - b.id;
    }))

  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };


  return (
    <div className="todo-list">
      <span className="todo-list-title">To Do: {LiveList?.length}</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos?.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};
