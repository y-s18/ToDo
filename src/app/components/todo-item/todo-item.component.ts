import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { ToDo } from '../../ToDo';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'toDo-todo-item',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() todo!: ToDo;
  faTimes = faTimes;
  @Output() onToggleDone: EventEmitter<ToDo> = new EventEmitter;
  @Output() onDeleteTodo: EventEmitter<ToDo> = new EventEmitter;

  onToggle(todo: ToDo){
    this.onToggleDone.emit(todo);
  }

  onDelete(todo: ToDo) {
    this.onDeleteTodo.emit(todo);
  }
}
