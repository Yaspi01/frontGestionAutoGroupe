import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    // postApprenant: any;
    // postTravaux: any;
  constructor(private http: HttpClient) { }

  listApprenant(){
   return this.http.get('http://localhost:8080/api/apprenant/liste');
  }
  listTravaux(){
    return this.http.get('http://localhost:8080/api/travaux/liste');
  }
  listGroupe(){
    return this.http.get('http://localhost:8080/api/groupe/liste');
  }
  addApprenant(postApprenant: any){
    return this.http.post('http://localhost:8080/api/apprenant/add', postApprenant, {responseType: 'text'});
  }
  addTravaux(postTravaux: any){
    return this.http.post('http://localhost:8080/api/travaux/add', postTravaux, {responseType: 'text'});
  }
}
