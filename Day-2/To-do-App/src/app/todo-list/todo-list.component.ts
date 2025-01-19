import { Component, Input,Output ,EventEmitter} from '@angular/core';
import { TodoWrapperComponent } from '../todo-wrapper/todo-wrapper.component';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() tasks: string[] = [];
  @Output() handleDeleteTask = new EventEmitter<string>();

  deleteTask(index:string) {
    this.handleDeleteTask.emit(index);
  }
}
