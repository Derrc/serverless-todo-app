import type { Todo } from "../../types";
import { TodoItem } from "../TodoItem";
import "./TodoItemList.css";
import { TodoModal } from "../TodoModal";

type Props = {
  todos: Todo[];
};
export const TodoItemList = ({ todos }: Props) => {
  const handleShowModal = () => {
    const dialog = document.querySelector("dialog");
    dialog?.showModal();
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          content={todo.content}
          isDone={todo.isDone}
        />
      ))}
      <button className="todo-list-button" onClick={handleShowModal}>
        Add Todo
      </button>
      <TodoModal />
    </div>
  );
};
