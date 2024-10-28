import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { CharacterComponent } from './components/character/character.component';
import { Character } from './models/Character';
import { CharactersService } from './services/characters.service';

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
export class AppComponent implements OnInit {
  characters!: Character[];

  constructor(private service: CharactersService) {}

  ngOnInit(): void {
    this.characters = this.service.findAll();
  }
}
