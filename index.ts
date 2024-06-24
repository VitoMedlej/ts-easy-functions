export class HttpClient {
    async get(url: string, params: Record<string, any> = {}): Promise<any> {
        try {
            const query = new URLSearchParams(params).toString();
            const response = await fetch(`${url}?${query}`);
            return await response.json();
        } catch (error) {
            console.error('GET request failed:', error);
            throw error;
        }
    }
  
    async post(url: string, body: Record<string, any> = {}): Promise<any> {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            return await response.json();
        } catch (error) {
            console.error('POST request failed:', error);
            throw error;
        }
    }
  }
