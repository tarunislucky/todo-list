import { useCallback } from "react";
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
	//  memoizing this to prevent all list items re-render on one element change
	const deleteTaskHandler = useCallback(
		(id) => {
			setTasks((tasksPrev) => {
				const tasks = tasksPrev.filter((tsk) => tsk.id !== id);
				return tasks;
			});
		},
		[setTasks]
	);

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
