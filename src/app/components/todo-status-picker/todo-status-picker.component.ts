import { Component, EventEmitter, Input, Output } from '@angular/core'
import { NgForOf } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { TodoStatus, TodoStatusValues } from 'src/app/models/todo-models'
import { getStatusBgColor, getStatusTextColor } from 'src/app/utils/status-color-picker'

@Component({
  selector: 'app-todo-status-picker',
  imports: [NgForOf, FormsModule],
  templateUrl: './todo-status-picker.component.html',
  styleUrl: './todo-status-picker.component.css',
  standalone: true,
})
export class TodoStatusPickerComponent {
  @Input() currentStatus!: TodoStatus
  @Output() statusChange = new EventEmitter<TodoStatus>()

  onStatusSelect(status: TodoStatus) {
    this.statusChange.emit(status)
  }

  protected readonly TodoStatusValues = TodoStatusValues
  protected readonly getStatusTextColor = getStatusTextColor
  protected readonly getStatusBgColor = getStatusBgColor
}
