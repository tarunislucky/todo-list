const ClearAllTasks = ({ tasks, onClearTasks }) => {
	return (
		<div className="clear-tasks">
			<p>You have {tasks.length} pending tasks</p>
			<button onClick={onClearTasks}>Clear All</button>
		</div>
	);
};

export default ClearAllTasks;
