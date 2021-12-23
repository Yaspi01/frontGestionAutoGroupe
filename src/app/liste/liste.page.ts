import { ServiceService } from './../services/service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.page.html',
  styleUrls: ['./liste.page.scss'],
})
export class ListePage implements OnInit {
          listes: any;
          mode=1;
  constructor(private router: Router,
    private service: ServiceService) {
      this.listApprenant();
    }

  ngOnInit(): void{
  }
  listApprenant(){
     this.service.listApprenant().subscribe((data: any)=>{
      this.listes=data;
      //console.log(data);
    });
  }
  clickLister(){
    this.mode = 1;
  }

  clickAjouter(){
    this.mode = 2;
  }
}
