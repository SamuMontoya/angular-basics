import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardComponent,
    LayoutComponent,
    HeaderComponent,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'characters-cards';
}
