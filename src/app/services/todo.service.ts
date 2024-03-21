import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from '../ToDo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:5000/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.apiUrl);
  }

  deleteTodo(todo: ToDo): Observable<ToDo> {
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.delete<ToDo>(url);
  }

  updateTodoStatus(todo: ToDo): Observable<ToDo> {
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.put<ToDo>(url, todo, httpOptions);
  }
}
