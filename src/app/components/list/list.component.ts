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
  @Output() delete = new EventEmitter<User>();
  @Output() select = new EventEmitter<string>()
  @Output() refresh = new EventEmitter<CustomEvent<RefresherEventDetail>>()

  onDelete(user: User) {
    this.delete.emit(user);
  }

  onSelect(id : string){
    this.select.emit(id)
  }

  onRefresh(event: CustomEvent<RefresherEventDetail> | undefined){
    this.refresh.emit(event)
  }
}
