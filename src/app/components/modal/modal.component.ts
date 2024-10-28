import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogModule, MatIconModule],
  templateUrl: './modal.component.html',
})
export class ModalComponent {}
