import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { CharacterComponent } from './components/character/character.component';
import { Character } from './models/Character';
import { CharactersService } from './services/characters.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';

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

  constructor(private service: CharactersService, public dialog: MatDialog) {}

  onOpenModal() {
    this.dialog.open(ModalComponent, {
      width: '400px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
  }

  ngOnInit(): void {
    this.characters = this.service.findAll();
  }
}
