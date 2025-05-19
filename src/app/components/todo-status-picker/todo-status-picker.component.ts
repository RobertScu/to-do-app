import { Component, inject, Input } from '@angular/core'
import { NgForOf } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { TodoItem, TodoStatus, TodoStatusValues } from 'src/app/models/todo.models'
import { getStatusBgColor, getStatusTextColor } from 'src/app/utils/status-color-picker'
import { TodoListStore } from 'src/app/stores/todo-list.store'

@Component({
  selector: 'app-todo-status-picker',
  imports: [NgForOf, FormsModule],
  templateUrl: './todo-status-picker.component.html',
  styleUrl: './todo-status-picker.component.css',
  standalone: true,
})
export class TodoStatusPickerComponent {
  @Input() todo!: TodoItem

  private readonly todos = inject(TodoListStore)

  readonly TodoStatusValues = TodoStatusValues
  readonly getStatusTextColor = getStatusTextColor
  readonly getStatusBgColor = getStatusBgColor

  updateStatus(status: TodoStatus) {
    this.todos.updateStatus(this.todo.id, status)
  }
}
