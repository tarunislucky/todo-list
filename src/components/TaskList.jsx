import TaskItem from "./TaskItem";
const TaskList = ({ tasks, deleteTaskHandler }) => {
	return (
		<ul>
			{tasks.map((task) => (
				<TaskItem task={task} key={task.id} onDelete={deleteTaskHandler} />
			))}
		</ul>
	);
};
export default TaskList;
