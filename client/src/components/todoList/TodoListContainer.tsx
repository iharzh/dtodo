import TodoList from "./TodoList";
import {useCallback, useEffect} from "react";
import TodosService from "../../services/todosService";
import HttpService from "../../services/httpService";

const todosService = new TodosService(new HttpService());

const TodoListContainer = () => {
    const fetchTodos = useCallback(async () => {

        const todos = await todosService.getTodos();
        console.log({todos});
    }, [])

    useEffect(() => {
        fetchTodos()
    }, [fetchTodos])

    return(
    <TodoList todos={[]}/>
)}

export default TodoListContainer;
