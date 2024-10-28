import { Injectable } from '@angular/core';
import { Character } from '../models/Character';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private characters: Character[] = [
    {
      id: 1,
      name: 'Mikey',
      type: 'Mouse',
      img: 'assets/mikey.png',
    },
    {
      id: 2,
      name: 'Miney',
      type: 'Mouse',
      img: 'assets/miney.png',
    },
    {
      id: 3,
      name: 'Lucas',
      type: 'Duck',
      img: 'assets/lucas.png',
    },
    {
      id: 4,
      name: 'Pluto',
      type: 'Dog',
      img: 'assets/pluto.png',
    },
  ];

  findAll(): Character[] {
    return this.characters;
  }
}
