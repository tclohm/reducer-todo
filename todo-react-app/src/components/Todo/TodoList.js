import React, { useReducer } from "react";
// components
import TodoForm from "../Form/TodoForm";
import TodoItem from "./TodoItem";
// MARK: - Reducer
import { initialState, reducer } from "../../reducers/todoReducer";


const TodoList = () => {
	const [todosState, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="container">
			<TodoForm dispatch={dispatch} todos={todosState} />
			<div className="todo-list-container">
				{todosState.map( (item) => (
					<TodoItem 
						key={item.id}
							item={item} 
							dispatch={dispatch} 
					/>
				)) 
				}
			</div>
		</div>
	);
}

export default TodoList;