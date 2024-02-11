import { Component } from '@angular/core';
import { ToDo } from '../../ToDo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';
import { TODOS } from '../../mock-todos';

@Component({
  selector: 'toDo-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  todos: ToDo[] = TODOS;//[];

}
