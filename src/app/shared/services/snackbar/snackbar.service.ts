import { Injectable, signal } from '@angular/core'
import { SnackbarConfig } from 'src/app/shared/services/snackbar/snackbar.models'

@Injectable({ providedIn: 'root' })
export class SnackbarService {
  private readonly defaultDuration = 3000
  private snackbarState = signal<SnackbarConfig | null>(null)
  readonly snackbar = this.snackbarState

  show(config: SnackbarConfig): void {
    this.snackbarState.set({
      duration: this.defaultDuration,
      ...config,
    })

    setTimeout(() => {
      this.snackbarState.set(null)
    }, config.duration ?? this.defaultDuration)
  }
}
