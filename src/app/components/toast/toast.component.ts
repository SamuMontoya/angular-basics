import { Component, inject } from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarActions,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'toast',
  templateUrl: './toast.component.html',
  standalone: true,
  imports: [MatSnackBarActions],
})
export class Toast {
  snackBarRef = inject(MatSnackBarRef);
  message: string = inject(MAT_SNACK_BAR_DATA);
}
