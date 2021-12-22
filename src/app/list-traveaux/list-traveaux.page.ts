import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-traveaux',
  templateUrl: './list-traveaux.page.html',
  styleUrls: ['./list-traveaux.page.scss'],
})
export class ListTraveauxPage implements OnInit {
  mode=1;

  constructor() { }
  
  clickLister(){
    this.mode = 1;
  }

  clickAjouter(){
    this.mode = 2;
  }

  ngOnInit() {
  }


}
