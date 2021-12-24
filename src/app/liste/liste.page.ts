import { ServiceService } from './../services/service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.page.html',
  styleUrls: ['./liste.page.scss'],
})
export class ListePage implements OnInit {
          mode=1;
          listes: any;
          apprenant: FormGroup;
          apprenantBody: any;
  constructor(private router: Router,
    private service: ServiceService, public formBuilder: FormBuilder) {

      this.listApprenant();

      this.apprenant = this.formBuilder.group({
       nom : ['', Validators.required],
      email :['', Validators.required] ,
      tel : ['', Validators.required]
    });
    }

  ngOnInit(): void{
  }
  async saveData(){
    this.apprenantBody={
      nom: this.apprenant.value.nom,
      email: this.apprenant.value.email,
      tel: this.apprenant.value.tel
    };
    //console.log(this.apprenantBody);

   await this.service.addApprenant(this.apprenantBody).subscribe(data=>{
      //console.log(data);
      this.router.navigate([this.mode = 1]);
    });
    this.apprenant.reset();
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
