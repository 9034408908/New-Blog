import { Component, OnInit } from '@angular/core';
import { ActorService } from '../actor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
public edit_id:string;
public emps: Array<any>;
todaydate = new Date();

  constructor( private service: ActorService, private router: Router ) { 
this.emps = [];
this.getemps()
}

  ngOnInit() {

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
edit(data){
 this.router.navigate([`/emp/${data.id}`])
}
delete(id){
  this.service.delete(id).subscribe((add)=>{
console.log(add);
this.getemps()
  })
}
}
