import { Component, Input, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'modal-header',
  standalone: true,
  imports: [MatIconModule, MatDialogModule],
  templateUrl: './modal-header.component.html',
})
export class ModalHeaderComponent implements OnInit {
  label!: string;
  @Input() type!: 'create' | 'edit';

  ngOnInit(): void {
    this.label = this.type === 'create' ? 'Create' : 'Edit';
  }
}
