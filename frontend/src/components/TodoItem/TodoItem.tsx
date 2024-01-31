import { deleteTodo, updateTodo } from "../../api";
import { Todo } from "../../types";
import "./TodoItem.css";

type Props = {
  todo: Todo;
  onClick: () => void;
};
export const TodoItem = ({ todo, onClick }: Props) => {
  const handleUpdate = async () => {
    await updateTodo(todo);
    onClick();
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
    onClick();
  };

  return (
    <div className="todo-item">
      <li
        className={`todo-item-content ${
          todo.isDone ? "todo-item-content-done" : ""
        }`}
        onClick={handleUpdate}
      >
        {todo.content}
      </li>
      <button className="todo-item-remove-button" onClick={handleDelete}>
        X
      </button>
    </div>
  );
};
