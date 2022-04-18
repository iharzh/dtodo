import axios from "axios";

class HttpService {
    async get<T>(url: string): Promise<T> {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (e) {
            throw new Error(`GET ${url} failed: ${e}`)
        }
    }

    async post<TData, TResponse>(url: string, data: TData): Promise<TResponse> {
        try {
            const response = await axios.post(url, data);
            return response.data;
        } catch (e) {
            throw new Error(`POST ${url} failed: ${e}`)
        }
    }
}

export default HttpService;
