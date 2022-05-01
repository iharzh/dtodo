import { Button, FormControl, InputGroup, ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface TodoItemProps {
  id: string;
  text: string;
  isCompleted: boolean;
  handleDelete: (id: string) => void;
  handleComplete: (todoId: string, isCompleted: boolean) => void;
  handleUpdateText: (todoId: string, todoText: string) => void;
}

const TodoItem = ({ id, text, isCompleted, handleDelete, handleComplete, handleUpdateText }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setTodoText] = useState(text);
  const onDeleteClick = () => {
    handleDelete(id);
  };

  const onCompleteClick = () => {
    handleComplete(id, !isCompleted);
  };

  return (
    <ListGroup.Item as="li" className={classNames('my-1 d-inline-flex justify-content-between align-items-center flex-nowrap', styles['todo-wrapper'])}>
      {!isEditing && <span onClick={onCompleteClick} className={classNames('flex-grow-1', styles['todo-text'], {[styles['todo-text_completed']]: isCompleted})}>{text}</span>}
      {isEditing && (
        <InputGroup>
          <FormControl
            placeholder='Todo text'
            aria-label='Todo text'
            onChange={(e) => setTodoText(e.currentTarget.value)}
            value={todoText}
          />
        </InputGroup>
      )}
      <span className="d-flex flex-nowrap ms-3">

        {!isEditing && <Button className="me-1" onClick={(e) => {
          setIsEditing(true);
        }}>Edit</Button>}
        {isEditing && <Button
          className="me-1"
          disabled={!todoText}
          onClick={() => {
            handleUpdateText(id, todoText)
            setIsEditing(false);
          }}>Save</Button>}
        {isEditing && <Button className="me-1" onClick={(e) => {
          setIsEditing(false);
        }}>Cancel</Button>}
        <Button onClick={onDeleteClick} variant='danger'>X</Button>
      </span>

    </ListGroup.Item>
  );
};

export default TodoItem;
