import { TodoItemList } from "./components/TodoItemList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="title"> Todo List </div>
      <TodoItemList />
    </div>
  );
}

export default App;
