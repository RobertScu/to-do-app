import { Injectable } from '@angular/core'
import { signal } from '@angular/core'
import { ModalConfig } from 'src/app/shared/services/modal/modal.models'

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalState = signal<ModalConfig | null>(null)
  readonly modal = this.modalState

  open(config: ModalConfig): void {
    this.modalState.set(config)
  }

  close(): void {
    this.modalState.set(null)
  }
}
