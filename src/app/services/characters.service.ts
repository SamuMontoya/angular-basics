import { Injectable } from '@angular/core';
import { Character } from '../models/Character';
import { defaultCharacters } from '../constants/characters';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private characters: Character[] = [...defaultCharacters];

  findAll(): Character[] {
    return this.characters;
  }

  add(character: Character): void {
    this.characters.unshift(character);
  }
}
