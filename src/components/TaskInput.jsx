const TaskInput = ({ value, onInputChange }) => {
	return (
		<input
			onChange={onInputChange}
			value={value}
			placeholder="Enter task name"
		/>
	);
};
export default TaskInput;
