import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../../ToDo';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'toDo-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() todo!: ToDo;
  @Output() onToggleDone: EventEmitter<ToDo> = new EventEmitter

  onToggle(todo: ToDo){
    this.onToggleDone.emit(todo);
  }
}
