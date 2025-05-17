import { Injectable } from '@angular/core'
import { Todo, TodoStatus } from 'src/app/models/todo-models'

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList: Todo[] = [
    {
      id: '1',
      name: 'Learn Angular',
      description: 'Need to watch a tutorial for it',
      status: 'in-progress',
      creationDate: new Date(),
    },
    { id: '2', name: 'Master Tailwind CSS', description: '', status: 'completed', creationDate: new Date() },
    { id: '3', name: 'Build Todo App', description: '', status: 'todo', creationDate: new Date() },
  ]

  filteredTodoList: Todo[] = this.todoList

  filterResults(searchTerm: string): Todo[] {
    this.filteredTodoList = this.todoList.filter((todo) => {
      return todo.name.toLowerCase().includes(searchTerm.toLowerCase()) || todo.description.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return this.filteredTodoList
  }

  addTodo(newTodo: Todo): void {
    this.todoList.push(newTodo)
    this.filteredTodoList = this.todoList
  }

  changeTodoStatus(id: string, status: TodoStatus) {
    this.todoList.find((todo) => todo.id === id)!.status = status
  }

  deleteTodo(id: string) {
    this.todoList.findIndex((todo) => todo.id === id) !== -1
      ? this.todoList.splice(
          this.todoList.findIndex((todo) => todo.id === id),
          1,
        )
      : null
  }

  constructor() {}
}
