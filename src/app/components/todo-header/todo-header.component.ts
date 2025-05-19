import { Component, inject } from '@angular/core'
import { TodoListStore } from 'src/app/stores/todo-list.store'

@Component({
  selector: 'app-todo-header',
  imports: [],
  templateUrl: './todo-header.component.html',
  standalone: true,
  styleUrl: './todo-header.component.css',
})
export class TodoHeaderComponent {
  protected readonly todos = inject(TodoListStore)
}
