import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ClearAllTasks from "./components/ClearAllTasks";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
	const [tasks, setTasks] = useState([]);

	const addTaskHandler = (taskText) => {
		setTasks((tasksPrev) => [
			{ name: taskText, id: Math.random() },
			...tasksPrev,
		]);
	};
	const clearAllTasksHandler = () => {
		setTasks([]);
	};
	const deleteTaskHandler = (id) => {
		setTasks((tasksPrev) => {
			const tasks = tasksPrev.filter((tsk) => tsk.id !== id);
			return tasks;
		});
	};

	return (
		<>
			<Card>
				<h1>Todo App</h1>

				<TaskForm onAddTask={addTaskHandler} />

				<TaskList tasks={tasks} deleteTaskHandler={deleteTaskHandler} />

				<ClearAllTasks tasks={tasks} onClearTasks={clearAllTasksHandler} />
			</Card>
		</>
	);
}

export default App;
