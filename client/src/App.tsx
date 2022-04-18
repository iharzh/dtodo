import React from 'react';
import {TodoInput, TodoList} from "./components";
import './App.scss';

function App() {
  return (
    <div>
        Hello!
      <TodoInput handleSubmit={() => {}} />
      <TodoList />
    </div>
  );
}

export default App;
