import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ToDo } from '../ToDo';
import { TODOS } from '../mock-todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(): Observable<ToDo[]> {
    const todos = of(TODOS);
    return todos;
  }
}
