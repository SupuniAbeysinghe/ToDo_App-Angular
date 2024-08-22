import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppTodo } from './navbar/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppTodo],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
