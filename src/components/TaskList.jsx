import { useContext } from "react";
import TaskContext from "../store/task-context";
import TaskItem from "./TaskItem";
const TaskList = () => {
	const { tasks, onDeleteTask } = useContext(TaskContext);
	return (
		<ul>
			{tasks.map((task) => (
				<TaskItem task={task} key={task.id} onDelete={onDeleteTask} />
			))}
		</ul>
	);
};
export default TaskList;
