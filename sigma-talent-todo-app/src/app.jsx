import * as React from "react";
import { TodoForm } from "./components/todo-form/todo-form";
import { TodoList } from "./components/todo-list/todo-list";
import { TodoResults } from "./components/todo-results/todo-results";
import { TodosContext } from "./todo-context";
import "./index.css";

export const App = () => {
  const [todos, setTodos] = React.useState([]);


  React.useEffect(() => {
    const todosTemplate = [
      {
        idn: 0,
        label: "First item",
        checked: false
      }
    ];

    setTodos([...todosTemplate])
  }, [])


  return (
    <div className="root">
      <TodosContext.Provider value={[todos, setTodos]}>
        <TodoList todos={todos} />
        <TodoResults />
        <TodoForm />
      </TodosContext.Provider>
    </div>
  );
};
