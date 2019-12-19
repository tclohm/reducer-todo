import React, { useState } from "react";
import "../../App.css";

// Reducer
import { CHECK } from "../../reducers/todoReducer";

const TodoItem = (props) => {

	const handleCompleted = (event) => {
		event.preventDefault();
		props.dispatch({ type: CHECK, payload: props.item.id });
	}

	return (
		<>
			{props.item.completed ? <div className="todo-item checked" onClick={handleCompleted}>
								<h3 key={props.key}>{props.item.item}</h3>
								<i className="check-right fas fa-check fa-5x"></i>
							   </div>
							: 
							   <div className="todo-item" onClick={handleCompleted}>
								<h3 key={props.key}>{props.item.item}</h3>
							   </div>
			}
		</>
	)
}

export default TodoItem;