import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import {CompactType, GridsterConfig, GridsterItem, GridsterItemComponent, GridsterPush, GridType} from 'angular-gridster2';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ActorService } from '../actor.service';
@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.component.html',
  styleUrls: ['./add-detail.component.css']
})
export class AddDetailComponent implements OnInit {
  public arrData= {};
  public data = [
    'Name',
    'Email',
    'Mobile No',
    'Company',
    'Remarks'
  ];

  constructor( private service: ActorService) {}
      ngOnInit() {
      }

drop(event: CdkDragDrop<string[]>) {
  moveItemInArray(this.data, event.previousIndex, event.currentIndex);
}
save() {
// const el: HTMLElement = document.getElementById('content');
const el: HTMLElement | null = document.getElementById('content');

if (el) {
  const definitelyAnElement: HTMLElement = el;
}
this.arrData = el;

this.service.create(this.arrData).subscribe(
  (add)=>{
    console.log(this.arrData);
  }
    )

localStorage.setItem('services_assigned', JSON.stringify(this.arrData));

}

delete(index){
  this.data.splice(index,1);
}
}
