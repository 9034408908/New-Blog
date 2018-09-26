import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit() {
  }
public view(){
	this.routes.navigate(["/emp"]);
}
}
