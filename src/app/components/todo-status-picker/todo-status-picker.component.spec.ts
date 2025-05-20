import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TodoStatusPickerComponent } from './todo-status-picker.component'

describe('TodoStatusPickerComponent', () => {
  let component: TodoStatusPickerComponent
  let fixture: ComponentFixture<TodoStatusPickerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoStatusPickerComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(TodoStatusPickerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })
})
