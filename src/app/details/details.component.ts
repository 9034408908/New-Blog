import { Component, OnInit } from '@angular/core';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

public emps: Array<any>;

  constructor( private service: ActorService ) { 

	    this.emps = [];

}

  ngOnInit() {

  this.getemps()

  }
getemps(){
	this.service.get().subscribe((add)=>{

  var keys=Object.keys(add);
  this.emps=keys.map((id)=>{
  return{id:id, add:add[id]}
})
  console.log(this.emps)
}
	)
}
}
