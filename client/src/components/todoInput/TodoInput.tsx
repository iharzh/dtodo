import {Button, Form} from "react-bootstrap";
import {FormEvent, useState} from "react";

interface TodoInputProps {
    handleSubmit: (data: any) => void;
}

const TodoInput = ({handleSubmit}: TodoInputProps) => {
    const [todoText, setTodoText] = useState('')

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        handleSubmit(todoText)
    }

    return(
    <Form onSubmit={onSubmit}>
        <Form.Control type="text" placeholder="Task text" value={todoText} onChange={(e) => setTodoText(e.currentTarget.value)}/>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
)}

export default TodoInput;
