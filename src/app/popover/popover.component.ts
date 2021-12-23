import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  groupes: any;
  constructor(private services: ServiceService)
   {
     this.listeGroupes();
   }

  ngOnInit() {}

  listeGroupes(){
    this.services.listGroupe().subscribe((data: any)=>{
      this.groupes=data;
      console.log(data);

    });
  }

}
