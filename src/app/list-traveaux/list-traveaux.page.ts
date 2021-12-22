import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-traveaux',
  templateUrl: './list-traveaux.page.html',
  styleUrls: ['./list-traveaux.page.scss'],
})
export class ListTraveauxPage implements OnInit {
  mode=1;
  travaux: any;
  postBody: any;

  constructor(public http: HttpClient, private router: Router) {
    this.getTravaux();
  }
  clickLister(){
    this.mode = 1;
  }

  clickAjouter(){
    this.mode = 2;
  }

  ngOnInit() {
  }
getTravaux(){
  this.http.get('http://localhost:8080/api/kalanso/listeT').subscribe(
    result => {
      // console.log(result);
      this.travaux= result;
    });

}
addTravaux(){
  this.http.post('http://localhost:8080/api/kalanso/addTravaux', this.postBody, {responseType:'text'}).subscribe(
    data=>{
      console.log(data);
      this.router.navigate(['mode==1']);
    }
  );
}
}
