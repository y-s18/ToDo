import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ToDo } from '../../ToDo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
    selector: 'toDo-todos',
    standalone: true,
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.scss',
    imports: [CommonModule, TodoItemComponent, AddTodoComponent]
})
export class TodosComponent {
  todos: ToDo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  deleteTodo(todo: ToDo) {
    this.todoService
    .deleteTodo(todo)
    .subscribe(
      () => (this.todos = this.todos.filter((t) => t.id !== todo.id))
      );
    }

  toggleDone(todo: ToDo) {
    todo.done = !todo.done;
    this.todoService.updateTodoStatus(todo).subscribe();
  }

  addTodo(todo: ToDo) {
    this.todoService.addTodo(todo).subscribe((todo) => (this.todos.push(todo)));
  }
}
