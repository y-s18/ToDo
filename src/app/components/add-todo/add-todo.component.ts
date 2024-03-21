import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToDo } from '../../ToDo';

@Component({
  selector: 'toDo-add-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent {
  @Output() onAddTodo: EventEmitter<ToDo> = new EventEmitter();
  text!: string;
  day!: string;
  done: boolean = false;

  onSubmit() {
    if(!this.text) {
      alert('Please add a todo!');
      return;
    }

    const newTodo = {
      text: this.text,
      day: this.day,
      done: this.done
    }

    this.onAddTodo.emit(newTodo);

    this.text = '';
    this.day = '';
    this.done = false;
  }
}
