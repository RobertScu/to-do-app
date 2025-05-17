import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CommonActionModalComponent } from 'src/app/common/common-action-modal/common-action-modal.component'

describe('CommonActionDialogComponent', () => {
  let component: CommonActionModalComponent
  let fixture: ComponentFixture<CommonActionModalComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonActionModalComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CommonActionModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
