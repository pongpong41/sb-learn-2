import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-create-item',
  templateUrl: './list-create-item.component.html',
  styleUrls: ['./list-create-item.component.scss']
})
export class ListCreateItemComponent {
  value = '';

  @Output()
  create = new EventEmitter();

  onCreate() {
    if (this.value) {
      this.create.emit(this.value);
      this.value = '';
    }
  }
}
