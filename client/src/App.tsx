import React from 'react';
import {TodoInput, TodoList} from "./components";
import './App.scss';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <TodoList />
    </Container>
  );
}

export default App;
