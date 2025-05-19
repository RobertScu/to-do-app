import { Component, inject } from '@angular/core'
import { v4 as uuid } from 'uuid'
import { FormsModule } from '@angular/forms'
import { TodoStatus } from 'src/app/models/todo.models'
import { TodoListStore } from 'src/app/stores/todo-list.store'

type TodoForm = {
  name: string
  description: string
  status: TodoStatus
}

@Component({
  selector: 'app-todo-add-item',
  imports: [FormsModule],
  templateUrl: './todo-add-item.component.html',
  standalone: true,
  styleUrl: './todo-add-item.component.css',
})
export class TodoAddItemComponent {
  private readonly todos = inject(TodoListStore)

  newTodo: TodoForm = {
    name: '',
    description: '',
    status: 'todo',
  }

  addTodo() {
    this.todos.add({
      id: uuid(),
      name: this.newTodo.name.trim(),
      description: this.newTodo.description.trim(),
      status: this.newTodo.status,
      creationDate: new Date(),
    })

    this.resetForm()
  }

  resetForm() {
    this.newTodo.name = ''
    this.newTodo.description = ''
  }
}
