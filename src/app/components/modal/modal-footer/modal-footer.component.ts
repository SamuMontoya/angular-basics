import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'modal-footer',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './modal-footer.component.html',
})
export class ModalFooterComponent {
  @Input() isInvalid!: boolean;
  @Input() isEdit!: boolean;
  @Output() submit = new EventEmitter<void>();
  onSubmit() {
    this.submit.emit();
  }

  @Output() delete = new EventEmitter<void>();
  onDelete() {
    this.delete.emit();
  }
}
