import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from '../input/input.component';
import { Character } from '../../models/Character';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogModule, MatIconModule, InputComponent, FormsModule],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  form: Character = {
    name: '',
    id: 0,
    img: '',
    type: '',
  };

  onSubmit() {
    console.log(this.form);
  }
}
