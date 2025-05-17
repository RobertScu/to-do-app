import { Component, EventEmitter, Input, Output } from '@angular/core'
import { NgForOf } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { TodoStatus, TodoStatusValues } from 'src/app/models/todo-models'

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

  getStatusClasses(status: TodoStatus): string {
    const baseClasses = 'px-3 py-1 rounded-full text-sm font-medium transition-colors'

    const statusClasses: Record<TodoStatus, string> = {
      ['todo']: 'bg-blue-100 text-blue-800 ',
      ['completed']: 'bg-green-100 text-green-800 ',
      ['in-progress']: 'bg-green-100 text-green-800 ',
    }

    return `${baseClasses} ${statusClasses[status]} ? 'ring-2 ring-offset-2' : ''}`
  }

  protected readonly TodoStatusValues = TodoStatusValues
}
