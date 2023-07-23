import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
const TaskList = () => {
	const tasks = useSelector((state) => {
		return state.tasks;
	});

	return (
		<ul>
			{tasks.map((task) => (
				<TaskItem task={task} key={task.id} />
			))}
		</ul>
	);
};
export default TaskList;
