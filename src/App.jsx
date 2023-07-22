import { useState } from "react";
import { useRef } from "react";
import "./App.css";
import TaskList from "./components/TaskList";

function App() {
	const inputRef = useRef();
	const [tasks, setTasks] = useState([]);

	const addTaskHandler = (event) => {
		event.preventDefault();
		const inputValue = inputRef.current.value;
		setTasks((prevState) => [
			{ name: inputValue, id: Math.random() },
			...prevState,
		]);
		inputRef.current.value = "";
	};
	const clearAllTasksHandler = () => {
		setTasks([]);
	};
	const deleteTaskHandler = (id) => {
		setTasks((prevState) => {
			// never mutate state in react
			const tasks = [...prevState];
			const index = tasks.findIndex((item) => item.id === id);
			// splcie mutates tasks, but tasks is not the state, it is a copy
			tasks.splice(index, 1);
			return tasks;
		});
	};

	return (
		<>
			<div className="card">
				<h1>Todo App</h1>

				<form>
					<input ref={inputRef} placeholder="Add your new todo" />
					<button onClick={addTaskHandler}>+</button>
				</form>

				<TaskList tasks={tasks} deleteTaskHandler={deleteTaskHandler} />

				<div className="clear-tasks">
					<p>You have {tasks.length} pending tasks</p>
					<button onClick={clearAllTasksHandler}>Clear All</button>
				</div>
			</div>
		</>
	);
}

export default App;
