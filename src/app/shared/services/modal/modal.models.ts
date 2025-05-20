export interface ModalConfig {
  isOpen: boolean
  title: string
  message: string
  confirmText: string
  onConfirm: () => void
  onCancel: () => void
}
