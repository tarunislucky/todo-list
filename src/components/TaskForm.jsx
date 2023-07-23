import { useState } from "react";
import TaskInput from "./TaskInput";

const TaskForm = ({ onAddTask }) => {
	const [inputText, setInputText] = useState();
	const addTaskHandler = (event) => {
		event.preventDefault();

		if (inputText.trim() === "") return;

		onAddTask(inputText);
		setInputText("");
	};

	const inputChangeHandler = (e) => {
		setInputText(e.target.value);
	};
	return (
		<form>
			<TaskInput onInputChange={inputChangeHandler} value={inputText} />
			<button onClick={addTaskHandler}>+</button>
		</form>
	);
};
export default TaskForm;
