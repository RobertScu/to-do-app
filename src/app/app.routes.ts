import { Routes } from '@angular/router'
import { TodoListComponent } from 'src/app/components/todo-list/todo-list.component'

export const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
    title: 'Todo List',
  },
]

export default routes
