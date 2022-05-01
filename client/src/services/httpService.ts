import axios from 'axios';

class HttpService {
  async get<T>(url: string): Promise<T> {
    try {
      const response = await axios.get(url);
      return response.data
    } catch (e) {
      throw new Error(`GET ${url} failed: ${e}`)
    }
  }

  async post<TData, TResponse>(url: string, data: TData): Promise<TResponse> {
    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (e) {
      throw new Error(`POST ${url} failed: ${e}`);
    }
  }

  async delete(url: string) {
    try {
      const response = await axios.delete(url);
      return response.data;
    } catch (e) {
      throw new Error(`DELETE ${url} failed: ${e}`);
    }
  }

  async patch(url: string, data: any) {
    try {
      const response = await axios.patch(url, data)
      return response.data;
    } catch (e) {
      throw new Error(`PATCH ${url} failed: ${e}`);
    }
  }
}

export default HttpService;
