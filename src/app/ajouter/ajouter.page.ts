import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.page.html',
  styleUrls: ['./ajouter.page.scss'],
})
export class AjouterPage implements OnInit {
  donnee: {nom:'', email:'', tel:''};

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

  async ajoutApprenants(form: NgForm){
    // let data = {
    //   nom : this.nom,
    //   email : this.email,
    //   tel : this.tel,
    // }
    console.log(form.value);
    
    this.service.addApprenants(form.value).subscribe((result)=>{
      this.apprenants = result
      console.log(result);
      this.router.navigateByUrl("liste")
     
    })
  }
}
