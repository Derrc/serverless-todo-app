import { useState, useEffect, useRef, useReducer } from "react";
import type { Todo } from "../../types";
import { TodoItem } from "../TodoItem";
import { TodoModal } from "../TodoModal";
import { getTodos, updateTodo } from "../../api";
import "./TodoItemList.css";

export const TodoItemList = () => {
  // force re-render to refetch updated todos (replace with reducer that optimisitcally modifies local state)
  const [state, forceUpdate] = useReducer((x) => x + 1, 0);

  const [todos, setTodos] = useState<Todo[]>([]);
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos();

      if (data) {
        setTodos(data);
      }
    };

    fetchTodos();
  }, [state]);

  const handleShowModal = () => {
    modalRef.current?.showModal();
  };

  const handleUpdate = () => {
    forceUpdate();
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onClick={handleUpdate} />
      ))}
      <button className="todo-list-button" onClick={handleShowModal}>
        Add Todo
      </button>
      <TodoModal ref={modalRef} onSubmit={handleUpdate} />
    </div>
  );
};
