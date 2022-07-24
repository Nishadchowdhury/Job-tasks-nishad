import * as React from "react";
import { TodosContext } from "../../todo-context";
import "./todo-results.css";

export const TodoResults = () => {
  const [todos] = React.useContext(TodosContext);

  const calculateChecked = (props) => {
    const totalDone = props.filter(todo => todo.checked === true);
    return totalDone.length;

  };

  return (
    <div className="todo-results">
      Done: {calculateChecked(todos)}
    </div>
  );
};
