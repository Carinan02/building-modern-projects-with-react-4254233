import { useState } from "react";
import { createTodo } from "./thunks";
import { useDispatch } from "react-redux";
export default function NewTodoForm() {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(createTodo(inputText));
          setInputText("");
        }}
      >
        Create todo
      </button>
    </div>
  );
}
