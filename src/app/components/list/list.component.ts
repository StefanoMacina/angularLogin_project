import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonRefresher, RefresherEventDetail } from '@ionic/angular';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() users: User[] = [];
  @Output() delete = new EventEmitter<string>();
  @Output() select = new EventEmitter<string>()
  @Output() refresh = new EventEmitter<CustomEvent<RefresherEventDetail>>()

  onDelete(id: string) {
    this.delete.emit(id);
  }

  onSelect(id : string){
    this.select.emit(id)
  }

  onRefresh(event: CustomEvent<RefresherEventDetail> | undefined){
    this.refresh.emit(event)
  }
}
