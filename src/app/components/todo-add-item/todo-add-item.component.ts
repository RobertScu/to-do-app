import { Component } from '@angular/core'
import { TodoService } from 'src/app/services/todo.service'
import { v4 as uuid } from 'uuid'
import { FormsModule } from '@angular/forms'
import { TodoStatusPickerComponent } from 'src/app/components/todo-status-picker/todo-status-picker.component'
import { TodoStatus } from 'src/app/models/todo-models'

@Component({
  selector: 'app-todo-add-item',
  imports: [FormsModule, TodoStatusPickerComponent],
  templateUrl: './todo-add-item.component.html',
  standalone: true,
  styleUrl: './todo-add-item.component.css',
})
export class TodoAddItemComponent {
  newTodo = {
    name: '',
    description: '',
    status: 'todo' as TodoStatus,
  }

  constructor(private todoService: TodoService) {}

  addTodo() {
    if (this.newTodo.name.trim()) {
      this.todoService.addTodo({
        id: uuid(),
        name: this.newTodo.name.trim(),
        description: this.newTodo.description.trim(),
        status: this.newTodo.status,
        creationDate: new Date(),
      })

      // Reset form
      this.newTodo = {
        name: '',
        description: '',
        status: 'todo',
      }
    }
  }

  onStatusChange(status: TodoStatus) {
    this.newTodo.status = status
  }
}
