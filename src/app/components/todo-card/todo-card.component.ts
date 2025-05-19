import { Component, inject, Input } from '@angular/core'
import { TodoItem } from 'src/app/models/todo.models'
import { formatDate } from '@angular/common'
import { TodoStatusPickerComponent } from 'src/app/components/todo-status-picker/todo-status-picker.component'
import { CommonActionModalComponent } from 'src/app/common/common-action-modal/common-action-modal.component'
import { TodoListStore } from 'src/app/stores/todo-list.store'

@Component({
  selector: 'app-todo-card',
  standalone: true,
  templateUrl: `./todo-card.component.html`,
  styleUrls: ['./todo-card.component.css'],
  imports: [TodoStatusPickerComponent, CommonActionModalComponent],
})
export class TodoCardComponent {
  @Input({ required: true }) todo!: TodoItem

  private readonly todos = inject(TodoListStore)
  readonly formatDate = formatDate

  showDeleteDialog = false

  onDeleteClick(): void {
    this.showDeleteDialog = true
  }

  onConfirmDelete(): void {
    this.todos.delete(this.todo.id)
    this.showDeleteDialog = false
  }

  onCancelDelete(): void {
    this.showDeleteDialog = false
  }
}
