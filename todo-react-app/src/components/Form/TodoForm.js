import React, { useState } from "react";
import { ADD, EDIT, DELETE_COMPLETED } from "../../reducers/todoReducer";

const TodoForm = (props) => {

	const [newTodoItem, setNewTodoItem] = useState('');

	const handleChange = (event) => {
		setNewTodoItem(event.target.value);
	}

	const handleClick = (event) => {
		const inputValue = newTodoItem.split("");
		let length = 0;

		inputValue.map(char => {
			if(char === " ") {
				length -= 1;
			}
			length += 1
		});

		if(length === 0) {
			alert("Please add a task. It can't be blank");
			return
		}
		
		event.preventDefault();
		props.dispatch({ type: ADD, payload: newTodoItem });
		setNewTodoItem("");
	}

	const handleEnter = (event) => {
		const input = document.querySelector(".new-todo-form");
		input.addEventListener("keyup", function(event) {
			if(event.keyCode === 13) {
				event.preventDefault();
				document.querySelector(".form-button").click();
			}
		})
	}

	const handleClear = (event) => {
		event.preventDefault();
		props.dispatch({ type: DELETE_COMPLETED, payload: false })
	}

	return (
		<div className="todo-form">
		<input
			className="new-todo-form"
			type="text"
			name="newTodoItem"
			placeholder="make a list..."
			value={newTodoItem}
			onChange={handleChange}
			onClick={handleEnter}
		/>
		<button className="form-button" onClick={handleClick}><i className="fas fa-plus-circle fa-3x"></i></button>
		<button className="form-button" onClick={handleClear}><i class="fas fa-trash fa-3x"></i></button>
		</div>
	)
}

export default TodoForm;