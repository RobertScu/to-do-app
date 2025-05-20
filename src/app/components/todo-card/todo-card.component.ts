import { Component, inject, Input } from '@angular/core'
import { TodoItem } from 'src/app/models/todo.models'
import { formatDate } from '@angular/common'
import { TodoStatusPickerComponent } from 'src/app/components/todo-status-picker/todo-status-picker.component'
import { TodoListStore } from 'src/app/stores/todo-list.store'
import { ModalService } from 'src/app/shared/services/modal/modal.service'
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service'

@Component({
  selector: 'app-todo-card',
  standalone: true,
  templateUrl: `./todo-card.component.html`,
  styleUrls: ['./todo-card.component.css'],
  imports: [TodoStatusPickerComponent],
})
export class TodoCardComponent {
  @Input({ required: true }) todo!: TodoItem

  private readonly todos = inject(TodoListStore)
  private readonly modalService = inject(ModalService)
  private readonly snackbarService = inject(SnackbarService)
  readonly formatDate = formatDate

  onDeleteClick(): void {
    this.modalService.open({
      isOpen: true,
      title: 'Delete Todo',
      message: 'Are you sure you want to delete this todo?',
      confirmText: 'Delete',
      onConfirm: () => {
        this.todos.delete(this.todo.id)
        this.modalService.close()

        this.snackbarService.show({
          message: 'Task successfully deleted',
        })
      },
      onCancel: () => {
        this.modalService.close()
      },
    })
  }
}
