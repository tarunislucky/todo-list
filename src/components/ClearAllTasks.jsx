import { useDispatch, useSelector } from "react-redux";
const ClearAllTasks = () => {
	const dispatch = useDispatch();
	const taskCount = useSelector((state) => {
		return state.taskCount;
	});

	const clearAllTasksHandler = () => {
		dispatch({ type: "clearAllTasks" });
	};
	return (
		<div className="clear-tasks">
			<p>You have {taskCount} pending tasks</p>
			<button onClick={clearAllTasksHandler}>Clear All</button>
		</div>
	);
};

export default ClearAllTasks;
