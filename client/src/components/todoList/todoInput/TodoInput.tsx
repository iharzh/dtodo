import { Button, Col, Form, Row } from 'react-bootstrap';
import { FormEvent, useState } from 'react';

interface TodoInputProps {
  handleSubmit: (data: any) => void;
}

const TodoInput = ({ handleSubmit }: TodoInputProps) => {
  const [todoText, setTodoText] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    handleSubmit(todoText);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Col sm={8} md={9}>
          <Form.Control type='text' placeholder='Add new todo' value={todoText}
                        onChange={(e) => setTodoText(e.currentTarget.value)} />
        </Col>
        <Col sm={4} md={3}>
          <Button variant='primary' type='submit' className='w-100 my-1 my-sm-0'>
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default TodoInput;
