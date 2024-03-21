import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ToDo } from '../../ToDo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'toDo-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  todos: ToDo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }
}
