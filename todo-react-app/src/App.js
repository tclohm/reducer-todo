import React from 'react';
import './App.css';

// MARK: - components
import Navbar from "./components/Navbar/Navbar";
import TodoList from "./components/Todo/TodoList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TodoList />
    </div>
  );
}

export default App;
