import { useState, forwardRef } from "react";
import "./TodoModal.css";
import { addTodo } from "../../api";

type Props = {
  onSubmit: () => void;
};

export const TodoModal = forwardRef<HTMLDialogElement, Props>(
  ({ onSubmit }, ref) => {
    const [content, setContent] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setContent(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // close modal
      const dialog = document.querySelector("dialog");
      dialog?.close();

      // post request
      await addTodo(content);

      // callback in parent component
      onSubmit();
    };

    return (
      <dialog id="todo-modal" className="todo-modal" ref={ref}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="content"> Content: </label>
          <input
            id="content"
            type="text"
            name="content"
            value={content}
            onChange={handleChange}
            autoFocus
          />
          <button className="todo-modal-button" type="submit">
            Add Todo
          </button>
        </form>
      </dialog>
    );
  }
);
