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
  apprenants: any;

  constructor( private router: Router, private service: ServiceService,
    private http: HttpClient) {
      // this.getAllApprenants();
      this.getAllApprenant()
    }

  ngOnInit(): void{
  }
  getAllApprenant(){
    this.service.allApprenants().subscribe((data: any)=>{
      console.log(data);
      this.apprenants = data
    })
  }
  // getAllApprenants()
  // {
  //   this.http.get('http://localhost:8080/api/kalanso/listeAp').subscribe(
  //     list=>{
  //       // console.log(list);
  //       this.apprenants=list;
  //     }
  //   );
  // }

  clickAjouter(){
    this.mode = 2;
  }
}
