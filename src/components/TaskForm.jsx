import { useContext } from "react";
import { useRef } from "react";

import TaskContext from "../store/task-context";

const TaskForm = () => {
	const inputRef = useRef();
	const { onAddTask } = useContext(TaskContext);

	const formSubmitHandler = (e) => {
		const task = inputRef.current.value;
		e.preventDefault();
		if (task === "") return;
		// add new task
		onAddTask(task);
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
