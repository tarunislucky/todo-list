import { useContext } from "react";
import TaskContext from "../store/task-context";
const ClearAllTasks = () => {
	const { taskCount, onClearAllTasks } = useContext(TaskContext);

	return (
		<div className="clear-tasks">
			<p>You have {taskCount} pending tasks</p>
			<button onClick={onClearAllTasks}>Clear All</button>
		</div>
	);
};

export default ClearAllTasks;
