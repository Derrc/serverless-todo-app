import { useState } from "react";
import "./TodoModal.css";

type Props = {
  onSubmit: () => void;
};
export const TodoModal = ({ onSubmit }: Props) => {
  const [content, setContent] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(content);
    onSubmit();

    // post methods to add todo to db
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="content"> Content </label>
      <input
        id="content"
        type="text"
        name="content"
        value={content}
        onChange={handleChange}
      />
      <button type="submit"> Add Todo </button>
    </form>
  );
};
