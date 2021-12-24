import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.page.html',
  styleUrls: ['./ajouter.page.scss'],
})
export class AjouterPage implements OnInit {

  mode=1;
  
  constructor(private service: ServiceService, private router:Router) { }

  apprenants: any
  nom : any
  email: any
  tel: any

  ngOnInit() {
    console.log(this.nom);
    
  }

  clickLister(){
    this.router.navigateByUrl("liste")
  }

  clickAjouter(){
    this.mode = 2;
  }

  ajoutApprenants(f:any){
    console.log(f);
    
    let data = {
      nom : this.nom,
      email : this.email,
      tel : this.tel,
    }
    console.log(data);
    
    this.service.addApprenants(data).subscribe((result)=>{
      console.log(result);
      this.router.navigateByUrl("liste")
     
    })
  }
}
