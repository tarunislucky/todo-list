import React from "react";
import { useState, useCallback } from "react";

const TaskContext = React.createContext({
	tasks: [],
	taskCount: 0,
	onAddTask: () => {},
	onDeleteTask: () => {},
	onClearAllTasks: () => {},
});

export const TaskContextProvider = (props) => {
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
		<TaskContext.Provider
			value={{
				tasks: tasks,
				taskCount: tasks.length,
				onAddTask: addTaskHandler,
				onDeleteTask: deleteTaskHandler,
				onClearAllTasks: clearAllTasksHandler,
			}}>
			{props.children}
		</TaskContext.Provider>
	);
};

export default TaskContext;
