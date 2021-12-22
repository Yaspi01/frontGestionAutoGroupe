import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-traveaux',
  templateUrl: './create-traveaux.page.html',
  styleUrls: ['./create-traveaux.page.scss'],
})
export class CreateTraveauxPage implements OnInit {
  valueSelected = 'veille';
  constructor() { }

  ngOnInit() {
  }

}
