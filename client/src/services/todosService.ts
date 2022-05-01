import HttpService from './httpService';

export interface Todo {
  text: string;
  isCompleted: boolean;
  id: string;
}

class TodosService {
  constructor(private readonly httpService: HttpService) {}

  async getTodos(): Promise<Todo[]> {
    try {
      return await this.httpService.get('http://localhost:5000/todos');
    } catch (e) {
      throw new Error(`getTodos error: ${e}`);
    }
  }

  async createTodo(todoText: string): Promise<Todo> {
    try {
      return await this.httpService.post('http://localhost:5000/todos', {
        todoText,
      });
    } catch (e) {
      throw new Error(`getTodos error: ${e}`);
    }
  }

  async deleteTodo(todoId: string): Promise<Todo> {
    try {
      return await this.httpService.delete(
        `http://localhost:5000/todos/${todoId}`
      );
    } catch (e) {
      throw new Error(`delete error: ${e}`);
    }
  }

  async patchTodo(todoId: string, data: Partial<Todo>) {
    try {
      return await this.httpService.patch(
        `http://localhost:5000/todos/${todoId}`,
        data
      );
    } catch (e) {
      throw new Error(`delete error: ${e}`);
    }
  }
}

export default TodosService;
