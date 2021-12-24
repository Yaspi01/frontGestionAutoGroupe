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

  updateApprenants(id: number, data: any){
    return this.http.put(this.url+"/modify/"+id, data)
  }

  deleteApprenant(id: number){
    return this.http.delete(this.url+"/delete/"+id)
  }
}
