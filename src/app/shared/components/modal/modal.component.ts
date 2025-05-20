import { Component, inject } from '@angular/core'
import { ModalService } from 'src/app/shared/services/modal/modal.service'

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  private readonly modalService = inject(ModalService)
  protected readonly modal = this.modalService.modal

  onConfirm(): void {
    this.modal()?.onConfirm()
  }

  onCancel(): void {
    this.modal()?.onCancel()
  }
}
