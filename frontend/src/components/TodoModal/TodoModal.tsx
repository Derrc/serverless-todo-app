import { useState } from "react";
import "./TodoModal.css";

export const TodoModal = () => {
  const [content, setContent] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(content);

    // close modal
    const dialog = document.querySelector("dialog");
    dialog?.close();

    // post methods to add todo to db
  };
  return (
    <dialog id="todo-modal" className="todo-modal">
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
};
