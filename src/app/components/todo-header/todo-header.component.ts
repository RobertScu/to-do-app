import { Component } from '@angular/core'
import { TodoService } from 'src/app/services/todo.service'

@Component({
  selector: 'app-todo-header',
  imports: [],
  templateUrl: './todo-header.component.html',
  standalone: true,
  styleUrl: './todo-header.component.css',
})
export class TodoHeaderComponent {
  constructor(private todoService: TodoService) {}

  onSearch(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value
    this.todoService.filterResults(searchTerm)
  }
}
