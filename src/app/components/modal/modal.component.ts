import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Character } from '../../models/Character';
import { FormsModule } from '@angular/forms';
import { defaultCharacters } from '../../constants/characters';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogModule, MatIconModule, FormsModule],
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  constructor(private service: CharactersService) {}

  defaultCharacters: Character[] = defaultCharacters;
  form: Character = {
    name: '',
    id: 0,
    img: '',
    type: '',
  };

  ngOnInit(): void {
    this.form.id = this.service.findAll().length + 1;
  }

  onSubmit() {
    this.service.add(this.form);
  }
}
