import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css'],

})
export class TranslateComponent implements OnInit {  
  public toggleSelect:boolean;                                                                              
  public selectLable:string;
  public selectedItem:string;
  public selectedImg:any;
  private dataList:any[]=[
  {value:"ENG",
   img:"assets/images/united-states.png", language:"en"},
  {value:"FRN",
   img:"assets/images/flag-french.png", language:"fr"}
  ];
  public unimg:boolean;
  @Input() label:string;
  @Input() data:any;
  @Output() selected:EventEmitter<any> = new EventEmitter();
  constructor(private translate: TranslateService) {
    this.toggleSelect = false;
    this.selectedItem = "ENG";
    this.unimg=true;

  translate.addLangs(["en", "fr"]);
    translate.setDefaultLang('en');

}

  switchLanguage(language: string) {
     this.translate.use(language);
}

  ngOnInit() {
    this.selectLable = this.label;
  }

  public toggleSelectBox($event:any):void {
    this.toggleSelect = !this.toggleSelect;
  };

  public selectedValue(value) {
    this.selectedItem = value.value;
    this.selectedImg  = value.img;
    this.toggleSelect = false;
    this.selected.emit(value);
    this.unimg=false;
  }
}