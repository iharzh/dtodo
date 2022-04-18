import HttpService from "./httpService";

class TodosService {
    constructor(private readonly httpService: HttpService) {}

    async getTodos() {
        try {
            return await this.httpService.get('http://localhost:5000/todos');
        } catch (e) {
            throw new Error(`getTodos error: ${e}`)
        }
    }
}

export default TodosService;
