import { ServiceService } from './../services/service.service';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  groupes: any;
  constructor(public popoverController: PopoverController, public services: ServiceService)
   {
    this.listeGroupes();

   }
  async presentPopover(eve) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps​:{

      },
      event:eve,
      //mode:'ios'| 'md',
      cssClass:'popOver',
      translucent: true
    });
    popover.onWillDismiss().then(()=>{
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
    //console.log('onDidDismiss resolved with role', role);
  }


  ngOnInit() {
  }

  listeGroupes(){
    this.services.listGroupe().subscribe((data: any)=>{
      this.groupes=data;
      console.log(data);

    });
  }

}
