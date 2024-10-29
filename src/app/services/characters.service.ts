import { Injectable } from '@angular/core';
import { Character } from '../models/Character';
import { defaultCharacters } from '../constants/characters';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private characters: Character[] = [...defaultCharacters];
  private charactersSubject = new BehaviorSubject<Character[]>(this.characters);

  characters$ = this.charactersSubject.asObservable();

  findAll(): Character[] {
    return this.characters;
  }

  add(character: Character): void {
    this.characters.unshift(character);
    this.charactersSubject.next([...this.characters]);
  }

  findById(id: number): Character | undefined {
    return this.characters.find((character) => character.id === id);
  }

  edit(character: Character): void {
    const index = this.characters.findIndex((c) => c.id === character.id);
    if (index > -1) {
      this.characters[index] = character;
      this.charactersSubject.next([...this.characters]);
    }
  }

  delete(id: number): void {
    this.characters = this.characters.filter((c) => c.id !== id);
    this.charactersSubject.next([...this.characters]);
  }
}
