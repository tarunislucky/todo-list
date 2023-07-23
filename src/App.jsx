import "./App.css";
import Card from "./components/Card";
import ClearAllTasks from "./components/ClearAllTasks";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
	return (
		<Card>
			<h1>Todo App</h1>
			<TaskForm />
			<TaskList />
			<ClearAllTasks />
		</Card>
	);
}

export default App;
