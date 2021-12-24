import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = "http://localhost:8080/api/apprenant/";
  constructor(private http: HttpClient) { }

  addApprenants(data: any){
    console.log(data)
    return this.http.post(this.url+"add",data); //, {responseType:"text"}
  }

  allApprenants(){
    return this.http.get(this.url+"liste");
  }

  apprenantsById(id: number){
    return this.http.get(this.url+"find/"+id)
  }
  addApprenant(postApprenant: any){
    return this.http.post('http://localhost:8080/api/apprenant/add', postApprenant, {responseType: 'text'});
  }
  addTravaux(postTravaux: any){
    return this.http.post('http://localhost:8080/api/travaux/add', postTravaux, {responseType: 'text'});

  }
}
