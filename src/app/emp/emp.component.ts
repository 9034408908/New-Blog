import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActorService } from '../actor.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
 public emp: any={};
  constructor( private router: Router, private service: ActorService, private activeRoute: ActivatedRoute ) { }

  ngOnInit() {

  }
public submit(){	
	this.router.navigate(["/details"]);
	this.service.create(this.emp).subscribe(
(add)=>{
	console.log(this.emp);
}
	)
}

}

