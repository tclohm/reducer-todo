export const ADD = "ADD_TODO";
export const EDIT = "EDIT_TODO";
export const CHECK = "CHECK_TODO";
export const DELETE_COMPLETED = "DELETE_COMPLETED";

export const initialState = [{
	item: 'Understand how the reducer hook can easy your development process',
	completed: false,
	id: 544029183509124
}, { 
	item: "Use context api to send data through the todo application for fun",
	completed: false,
	id: 201394532394214
}, {
	item: "Use class components or functional components for todo application",
	completed: false,
	id: 139583202394592
}];

export const reducer = (state, action) => {
	switch(action.type) {
	case ADD:
		return [...state, {item: action.payload, completed: false, id: Date.now()} ]
	case CHECK:
		return state.map(item => {
			if(item.id === action.payload) { 
				return { ...item, completed: !item.completed }
			} else { return item }
		})
	case DELETE_COMPLETED:
		return state.filter(item => {
			if(item.completed === action.payload) {
				return { ...item }
			}
		})
	default:
		return state;
	}
}