export const TodoStatusValues: TodoStatus[] = ['todo', 'completed', 'in progress']
export type TodoStatus = 'todo' | 'completed' | 'in progress'

export type TodoItem = {
  id: string
  name: string
  description?: string
  status: TodoStatus
  creationDate: Date
}
