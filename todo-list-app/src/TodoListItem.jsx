import { useDispatch } from "react-redux";
import { deleteTodo, markTodoAsCompleted } from "./thunks";
import { CardContainer } from "./styledComponent";

export default function TodoListItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <CardContainer important={todo.text.endsWith("!")}>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete!</p>}
      {todo.isCompleted ? (
        <button onClick={() => dispatch(deleteTodo(todo.id))}>
          Delete Item
        </button>
      ) : (
        <button onClick={() => dispatch(markTodoAsCompleted(todo.id))}>
          Mark as Completed
        </button>
      )}
    </CardContainer>
  );
}
