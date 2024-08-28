import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import axios from 'axios'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class AppTodo {
  todos: Array<any> = [];

  constructor() {
    this.fetchTodos(); 
  }

  fetchTodos() {
    axios.get('http://localhost:3000/todos') 
      .then(response => {
        this.todos = response.data;
      })
  }

  buttonClick(todoInput: HTMLInputElement) {
    const todoText = todoInput.value.trim();
    if (todoText === '') {
      alert('You must write something!');
      return;
    }

    const newTodo = {
      title: todoText,
      completed: false
    };

    axios.post('http://localhost:3000/todos', newTodo) 
      .then(response => {
        this.todos.push(response.data);
        todoInput.value = ''; 
      })
  }

  onCheckboxChange(todo: any) {
    axios.patch(`http://localhost:3000/todos/${todo.id}`, { completed: todo.completed }) 
  }

  onDelete(todo: any) {
    axios.delete(`http://localhost:3000/todos/${todo.id}`) 
      .then(response => {
        const index = this.todos.indexOf(todo);
        this.todos.splice(index, 1); 
        
      })
  }
}
