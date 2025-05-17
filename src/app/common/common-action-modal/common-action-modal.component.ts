import { Component, EventEmitter, Input, Output } from '@angular/core'
import { NgIf } from '@angular/common'

@Component({
  selector: 'app-common-action-modal',
  imports: [NgIf],
  templateUrl: './common-action-modal.component.html',
  standalone: true,
  styleUrl: './common-action-modal.component.css',
})
export class CommonActionModalComponent {
  @Input() isOpen = false
  @Input() title = 'Confirm Action'
  @Input() message = 'Are you sure you want to proceed?'
  @Input() confirmText = 'Confirm'
  @Input() cancelText = 'Cancel'

  @Output() confirm = new EventEmitter<void>()
  @Output() cancel = new EventEmitter<void>()

  onConfirm(): void {
    this.confirm.emit()
  }

  onCancel(): void {
    this.cancel.emit()
  }
}
