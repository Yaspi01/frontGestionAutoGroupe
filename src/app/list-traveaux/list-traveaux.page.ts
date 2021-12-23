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
  options: FormGroup;
  postBody: any;
  constructor(public services: ServiceService,
    private fb: FormBuilder, private router: Router) {
    this.listTravaux();


    this.options=this.fb.group({

      titre:['', Validators.required],
      type:['', Validators.required],
      nombre:['', Validators.required],
      debut:['', Validators.required],
      fin:['', Validators.required],
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
        titre: '' +this.options.value.titre,
        type: '' +this.options.value.type,
        debut: '' +this.options.value.debut,
        fin: '' +this.options.value.fin,
        nombre: '' +this.options.value.nombre
        //description: '' +this.options.value.description
      };

      this.services.addTravaux(this.postBody).subscribe(data=>{
        console.log(data);

      });
    }

    listTravaux(){
      this.services.listTravaux().subscribe((data: any)=>{
        this.travaux=data;
      });
    };

    //   console.log(this.postBody);

    //   this.services.postTravaux(this.postBody).subscribe((data: any) =>{
    //     console.log(data);
    //    // this.addTravaux = data;
    //     this.router.navigate(['mode=1']);
    //   });
    //}

}


