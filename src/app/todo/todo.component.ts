import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
  


})
export class AppTodo{



  

  todos: Array<any> = [];




  buttonClick(todos:HTMLInputElement){
    
    console.log(todos.value);

    let todo = {
      id: this.todos.length + 1,
      title: todos.value,
      completed: false
    };
    this.todos.push(todo);
    todos.value = '';
    }
    onDelete(todo:object){

      let index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    }


  }





