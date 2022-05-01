import { TodoItem } from './components';
import { Todo } from '../../services/todosService';
import { TodoInput } from './todoInput';
import { Col, ListGroup, Row } from 'react-bootstrap';

interface TodoListProps {
  todos: Todo[];
  handleAddTodo: (todoText: string) => void;
  handleDeleteTodo: (todoId: string) => void;
  handleCompleteTodo: (todoId: string, isCompleted: boolean) => void;
  handleUpdateTodoText: (todoId: string, todoText: string) => void;
}

const TodoList = ({
                    todos,
                    handleAddTodo,
                    handleDeleteTodo,
                    handleCompleteTodo,
                    handleUpdateTodoText
                  }: TodoListProps) => {
  return (
    <div>
      <Row className="justify-content-center my-5">
        <Col sm={8}>
          <h1 className="text-center">Todos</h1>
        </Col>
      </Row>
      <Row className="justify-content-center my-5">
        <Col sm={8}>
        <TodoInput handleSubmit={handleAddTodo} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={8}>
        <ListGroup as="ul">

          {todos.map((el) => (
            <TodoItem
              key={el.id}
              id={el.id}
              text={el.text}
              isCompleted={el.isCompleted}
              handleUpdateText={handleUpdateTodoText}
              handleDelete={handleDeleteTodo}
              handleComplete={handleCompleteTodo}
            />
          ))}
        </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default TodoList;
