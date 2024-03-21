import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { TodosComponent } from "./components/todos/todos.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'toDo-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HeaderComponent, TodosComponent, FontAwesomeModule]
})
export class AppComponent {
  title = 'toDo';
}
