import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ModalComponent } from 'src/app/shared/components/modal/modal.component'
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalComponent, SnackbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'to-do-app'
}
