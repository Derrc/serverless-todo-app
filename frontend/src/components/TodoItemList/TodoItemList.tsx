import { useState } from "react";
import type { Todo } from "../../types";
import { TodoItem } from "../TodoItem";
import "./TodoItemList.css";
import { TodoModal } from "../TodoModal";

type Props = {
  todos: Todo[];
};
export const TodoItemList = ({ todos }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => [setShowModal(!showModal)];
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} content={todo.content} isDone={todo.isDone} />
      ))}
      <button onClick={handleShowModal}> Add Todo </button>
      {showModal && <TodoModal onSubmit={handleShowModal} />}
    </div>
  );
};
