import "./App.css";
import { getTodos } from "./api";
import { TodoItemList } from "./components/TodoItemList";

function App() {
  const todos = getTodos();

  return (
    <div className="container">
      <div className="title"> Todo List </div>
      <TodoItemList todos={todos} />
    </div>
  );
}

export default App;
