import { Component, inject } from '@angular/core'
import { TodoHeaderComponent } from 'src/app/components/todo-header/todo-header.component'
import { TodoCardComponent } from 'src/app/components/todo-card/todo-card.component'
import { TodoAddItemComponent } from 'src/app/components/todo-add-item/todo-add-item.component'
import { TodoListStore } from 'src/app/stores/todo-list.store'

@Component({
  selector: 'app-todo-list',
  imports: [TodoHeaderComponent, TodoCardComponent, TodoAddItemComponent],
  templateUrl: './todo-list.component.html',
  standalone: true,
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  protected readonly todos = inject(TodoListStore)
}
