import {Todo} from "./components";

interface TodoListProps {
    todos: any[]
}

const TodoList = ({todos}: TodoListProps) => {
    return (
        <>
            {todos.map((el) => <Todo key={el.id} />)}
        </>
    )
}

export default TodoList;
