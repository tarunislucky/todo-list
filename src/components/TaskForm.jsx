import { useRef } from "react";
import { useDispatch } from "react-redux";

const TaskForm = () => {
	const inputRef = useRef();
	const dispatch = useDispatch();

	const formSubmitHandler = (e) => {
		e.preventDefault();
		if (inputRef.current.value.trim() === "") return;

		dispatch({ type: "addTask", task: inputRef.current.value });

		inputRef.current.value = "";
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<input ref={inputRef} placeholder="Enter task name" />
			<button>+</button>
		</form>
	);
};
export default TaskForm;
