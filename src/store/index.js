import { createStore } from "redux";

const initialState = { tasks: [], taskCount: 0 }
const counterReducer = (state = initialState, action) => {
	if (action.type === "addTask") {
		return {
			tasks: [{ name: action.task, id: Math.random() }, ...state.tasks],
			taskCount: state.taskCount + 1
		}
	}
	if (action.type === "removeTask") {
		return {
			tasks: state.tasks.filter(tsk => tsk.id !== action.id),
			taskCount: state.taskCount - 1
		}
	}
	if (action.type === "clearAllTasks") {
		return {
			tasks: [],
			taskCount: 0
		}
	}
	if (action.type === "setTaskState") {
		return {
			tasks: action.payload.tasks,
			taskCount: action.payload.taskCount
		}
	}
	return state;
}
// when store is created, reducer will be initialized without an action
const store = createStore(counterReducer);

export default store;