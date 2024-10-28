import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { CharacterComponent } from './components/character/character.component';
import { Character } from './models/Character';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardComponent,
    LayoutComponent,
    HeaderComponent,
    MatIconModule,
    CharacterComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  characters: Character[] = [
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
}
