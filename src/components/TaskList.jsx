import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskItem from "./TaskItem";

let isInitial = true;
const TaskList = () => {
	const dispatch = useDispatch();
	const { tasks, taskCount } = useSelector((state) => {
		return state;
	});

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			//on page reload
			//get tasks from local storage and set the state
			const localData = JSON.parse(localStorage.getItem("taskState"));
			if (!localData || localData.taskCount === 0) return;
			// setState
			dispatch({ type: "setTaskState", payload: localData });
			return;
		}

		if (!isInitial) {
			// set local storage on update to tasks
			localStorage.setItem(
				"taskState",
				JSON.stringify({
					tasks: tasks,
					taskCount: taskCount,
				})
			);
		}
	}, [dispatch, tasks, taskCount]);

	return (
		<ul>
			{tasks.map((task) => (
				<TaskItem task={task} key={task.id} />
			))}
		</ul>
	);
};
export default TaskList;
