import { Component, Input } from '@angular/core';
import { Character } from '../../models/Character';

@Component({
  selector: 'character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
})
export class CharacterComponent {
  @Input() character!: Character;
}
