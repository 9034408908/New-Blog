import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
 public emp: any={};
  constructor(private router: Router) { }

  ngOnInit() {
  }
public submit(){
	this.router.navigate(['/emp/details'])
}
}
