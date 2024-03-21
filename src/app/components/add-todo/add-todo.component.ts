import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'toDo-add-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent {
  text!: string;
  day!: string;
  done: boolean = false;
}
