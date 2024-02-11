import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { TodosComponent } from "./components/todos/todos.component";

@Component({
    selector: 'toDo-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HeaderComponent, TodosComponent]
})
export class AppComponent {
  title = 'toDo';
}
