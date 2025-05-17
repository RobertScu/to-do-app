import { Component, inject, Input } from '@angular/core'
import { Todo } from 'src/app/models/todo-models'
import { formatDate } from '@angular/common'
import { TodoStatusPickerComponent } from 'src/app/components/todo-status-picker/todo-status-picker.component'
import { TodoService } from 'src/app/services/todo.service'
import { CommonActionModalComponent } from 'src/app/common/common-action-modal/common-action-modal.component'

@Component({
  selector: 'app-todo-card',
  standalone: true,
  templateUrl: `./todo-card.component.html`,
  styleUrls: ['./todo-card.component.css'],
  imports: [TodoStatusPickerComponent, CommonActionModalComponent],
})
export class TodoCardComponent {
  @Input({ required: true }) todo!: Todo
  protected readonly formatDate = formatDate

  showDeleteDialog = false

  onDeleteClick(): void {
    this.showDeleteDialog = true
  }

  onConfirmDelete(): void {
    this.todoService.deleteTodo(this.todo.id)
    this.showDeleteDialog = false
  }

  onCancelDelete(): void {
    this.showDeleteDialog = false
  }

  todoService: TodoService = inject(TodoService)
}
