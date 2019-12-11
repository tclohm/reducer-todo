import { useState } from "react";

const useLocalStorage = (key, initialState) => {
	const [storedValue, setStoredValue] = useState(() => {
		return window.localStorage.getItem(key) ? 
			JSON.parse(window.localStorage.getItem(key))
		:
			initialState;
	});

	const setValue = (value) => {
		setStoredValue(value);
		window.localStorage.setItem(key, JSON.stringify(value));
	}

	return [storedValue, setValue];
};

export default useLocalStorage;