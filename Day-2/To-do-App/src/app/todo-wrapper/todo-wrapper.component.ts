import { Component, Input } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-wrapper',
  imports: [TodoFormComponent,TodoListComponent],
  templateUrl: './todo-wrapper.component.html',
  styleUrl: './todo-wrapper.component.css'
})
export class TodoWrapperComponent {

   toDos: string[] = [];

  recievefromchild(event: string) {
    if(event){
      console.log('from parent',event);
      this.toDos.push(event);
    } else 
    {
      console.error('Received undefined or empty value from child.');
    }
  }

  DeleteTask(id:string){
    console.log('delete from parent',id);
    this.toDos = this.toDos.filter((task) => task !== id);
  }
}
