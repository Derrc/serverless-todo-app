import "./TodoItem.css";

type Props = {
  id: number;
  content: string;
  isDone: boolean;
};
export const TodoItem = ({ content, isDone }: Props) => {
  // const handleClick = () => {
  //   // call update endpoint here (update todo isDone)
  // };

  // const handleRemoveTodo = () => {
  //   // call delete endpoint here
  // };
  return (
    <div className="todo-item">
      <li
        className={`todo-item-content ${
          isDone ? "todo-item-content-done" : ""
        }`}
      >
        {content}
      </li>
      <button className="todo-item-remove-button"> X </button>
    </div>
  );
};
