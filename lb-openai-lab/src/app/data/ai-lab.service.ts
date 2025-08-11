export class AiLabService {
  ask(question: string) {
    return of({ message: 'backend not connected yet' });
    // Uncomment below for future HTTP call
    // return this.httpClient.post(`${environment.apiBaseUrl}/api/ask`, { question });
  }
}