import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { TodoItem, TodoStatus } from 'src/app/models/todo.models'
import { computed } from '@angular/core'

const initialState: TodoItem[] = [
  {
    id: '1',
    name: 'Buy stand-up comedy tickets',
    description: 'Jimmy Carr is coming to Copenhagen on 25th of April 2025. Invite friends',
    status: 'todo',
    creationDate: new Date(),
  },
  { id: '2', name: 'Hands-on Angular, TailwindCSS and signals', description: '', status: 'in progress', creationDate: new Date() },
  { id: '3', name: 'Close gym membership', description: 'By the end of April', status: 'completed', creationDate: new Date() },
  { id: '4', name: 'Improve dad jokes', description: '', status: 'in progress', creationDate: new Date() },
]

export const TodoListStore = signalStore(
  { providedIn: 'root' },

  withState<{ todos: TodoItem[]; searchTerm: string }>({ todos: initialState, searchTerm: '' }),

  withComputed(({ todos, searchTerm }) => ({
    filteredTodos: computed(() =>
      todos().filter((todo) => {
        const term = searchTerm().toLowerCase()
        return todo.name.toLowerCase().includes(term) || todo.description?.toLowerCase().includes(term)
      }),
    ),
  })),

  withMethods((store) => ({
    search(term: string) {
      patchState(store, { searchTerm: term })
    },

    add(todo: TodoItem) {
      patchState(store, {
        todos: [...store.todos(), todo],
      })
    },

    updateStatus(id: string, status: TodoStatus) {
      patchState(store, {
        todos: store.todos().map((todo) => (todo.id === id ? { ...todo, status } : todo)),
      })
    },

    delete(id: string) {
      patchState(store, {
        todos: store.todos().filter((todo) => todo.id !== id),
      })
    },
  })),
)
