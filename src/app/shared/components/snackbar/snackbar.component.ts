import { Component, inject } from '@angular/core'
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service'

@Component({
  selector: 'app-snackbar',
  imports: [],
  templateUrl: './snackbar.component.html',
  standalone: true,
  styleUrl: './snackbar.component.css',
})
export class SnackbarComponent {
  private readonly snackbarService = inject(SnackbarService)
  protected readonly snackbar = this.snackbarService.snackbar
}
