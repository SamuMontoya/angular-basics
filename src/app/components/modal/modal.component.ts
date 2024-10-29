import { Component, Inject, OnChanges, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Character } from '../../models/Character';
import { FormsModule } from '@angular/forms';
import { defaultCharacters } from '../../constants/characters';
import { CharactersService } from '../../services/characters.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalHeaderComponent } from './modal-header/modal-header.component';
import { ModalFooterComponent } from './modal-footer/modal-footer.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    FormsModule,
    ModalHeaderComponent,
    ModalFooterComponent,
  ],
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  constructor(
    private service: CharactersService,
    @Inject(MAT_DIALOG_DATA)
    public data: { type: 'create' | 'edit'; editingCharacter: Character }
  ) {}

  defaultCharacters: Character[] = defaultCharacters;
  form: Character = {
    name: '',
    id: 0,
    img: '',
    type: '',
  };

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      console.log(this.data.editingCharacter);
      this.form = this.data.editingCharacter;
    } else {
      this.form.id = this.service.findAll().length + 1;
    }
  }

  onSubmit() {
    if (this.data.type === 'edit') {
      this.service.edit(this.form);
    } else {
      this.service.add(this.form);
    }
  }

  onDelete() {
    this.service.delete(this.data.editingCharacter.id);
  }
}
