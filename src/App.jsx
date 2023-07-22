import "./App.css";

function App() {
	return (
		<>
			<div className="card">
				<h1>Todo App</h1>

				<form>
					<input placeholder="Add your new todo" />
					<button>+</button>
				</form>

				<ul>
					<li>Buy a new gaming laptop</li>
					<li>Complete a previous task</li>
					<li>Create video for Youtube</li>
					<li>Create a new portfolio site</li>
				</ul>

				<div className="clear-tasks">
					<p>You have 4 pending tasks</p>
					<button>Clear All</button>
				</div>
			</div>
		</>
	);
}

export default App;
