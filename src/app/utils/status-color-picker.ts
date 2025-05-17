import { TodoStatus } from 'src/app/models/todo-models'

export function getStatusTextColor(status: TodoStatus): string {
  const statusClasses: Record<TodoStatus, string> = {
    ['todo']: 'text-gray-600',
    ['completed']: 'text-green-600',
    ['in-progress']: 'text-amber-600',
  }

  return `${statusClasses[status]}`
}

export function getStatusBgColor(status: TodoStatus): string {
  const statusClasses: Record<TodoStatus, string> = {
    ['todo']: 'bg-gray-200',
    ['completed']: 'bg-green-200',
    ['in-progress']: 'bg-amber-200',
  }

  return `${statusClasses[status]}`
}
