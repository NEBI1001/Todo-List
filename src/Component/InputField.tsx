import React, { useRef } from "react";
import "./styles.css";

React

interface props {
  todo: string | number;
  setTodo: React.Dispatch<React.SetStateAction<string | number>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
      <form className="input" onSubmit={(e)=> {handleAdd(e)
        handleAdd(e)
        inputRef.current?.blur();
      }} >
      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="input"
        placeholder="Enter a Task"
        className="input_box"
      />
      <button className="input_submit" type="submit">
        Add
      </button>
    </form>
  );
};
export default InputField;
