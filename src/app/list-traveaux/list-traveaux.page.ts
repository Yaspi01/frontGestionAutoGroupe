import { ServiceService } from './../services/service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-list-traveaux',
  templateUrl: './list-traveaux.page.html',
  styleUrls: ['./list-traveaux.page.scss'],
})
export class ListTraveauxPage implements OnInit {
  mode=1;
  travaux: any;
  baara: FormGroup;
  postBody: any;
  constructor(public services: ServiceService,
    private fb: FormBuilder, private router: Router) {

    this.listTravaux();
    this.baara=this.fb.group({

      titre:['', Validators.required],
      type:['', Validators.required],
      nombre:['', Validators.required],
      debut:['', Validators.required],
      fin:['', Validators.required]
    });
  }
  clickLister(){
    this.mode = 1;
  }

  clickAjouter(){
    this.mode = 2;
  }

  ngOnInit(): void {

  }

    ajouTravaux(){
      this.postBody={
        titre:this.baara.value.titre,
        type: this.baara.value.type,
        debut: this.baara.value.debut,
        fin: this.baara.value.fin,
        nombre:this.baara.value.nombre
      };
     // console.log(this.postBody);

      this.services.addTravaux(this.postBody).subscribe(res=>{
        console.log(res);

      });
    }

    listTravaux(){
      this.services.listTravaux().subscribe((data: any)=>{
        this.travaux=data;
      });
    };

}


