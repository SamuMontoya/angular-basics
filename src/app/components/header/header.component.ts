import { Component } from '@angular/core';
import { CirclesComponent } from './circles/circles.component';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [CirclesComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
