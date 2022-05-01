import TodoList from './TodoList';
import { useCallback, useEffect, useState } from 'react';
import TodosService, { Todo } from '../../services/todosService';
import HttpService from '../../services/httpService';

const todosService = new TodosService(new HttpService());

const TodoListContainer = () => {
  const [isTodosLoading, setIsTodosLoading] = useState<boolean>(true);
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = useCallback(async () => {
    try {
      const todosResult = await todosService.getTodos();
      setTodos(todosResult);
    } catch (err) {
      console.error(err);
    } finally {
      setIsTodosLoading(false);
    }

  }, []);

  const handleAddTodo = useCallback(async (newTodoText: string) => {
    try {
      const result = await todosService.createTodo(newTodoText);

      setTodos(todos => [...todos, result]);
    } catch (e) {
    }
  }, []);

  const handleDeleteTodo = useCallback(async (todoId: string) => {
    try {
      await todosService.deleteTodo(todoId);
      setTodos(todos => todos.filter(todo => todo.id !== todoId));
    } catch (e) {
    }
  }, []);

  const handleCompleteTodo = useCallback(async (todoId: string, isCompleted: boolean) => {
    try {
      await todosService.patchTodo(todoId, { isCompleted });
      setTodos(todos => todos.reduce((acc: Todo[], todo) => {
        if (todo.id === todoId) {
          return [...acc, { ...todo, isCompleted }];
        }
        return [...acc, todo];
      }, []));
    } catch (e) {
    }

  }, []);

  const handleUpdateTodoText = useCallback(async (todoId: string, todoText: string) => {
    try {
      await todosService.patchTodo(todoId, { text: todoText });
      setTodos(todos => todos.reduce((acc: Todo[], todo) => {
        if (todo.id === todoId) {
          return [...acc, { ...todo, text: todoText }];
        }
        return [...acc, todo];
      }, []));
    } catch (e) {
    }
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  if (isTodosLoading) {
    return <p>Loading...</p>;
  }

  return (
    <TodoList todos={todos} handleAddTodo={handleAddTodo} handleDeleteTodo={handleDeleteTodo}
              handleCompleteTodo={handleCompleteTodo} handleUpdateTodoText={handleUpdateTodoText} />
  );
};

export default TodoListContainer;
