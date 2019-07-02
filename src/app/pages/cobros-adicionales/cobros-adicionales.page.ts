import { Component, OnInit } from '@angular/core';
import { RecargosAdicionalesService } from 'src/app/services/recargos-adicionales.service';
import { ActionSheetController } from '@ionic/angular';
import { RecargoAdicional } from 'src/app/models/recargoAdicional.model';

@Component({
  selector: 'app-cobros-adicionales',
  templateUrl: './cobros-adicionales.page.html',
  styleUrls: ['./cobros-adicionales.page.scss'],
  providers: [RecargosAdicionalesService]
})
export class CobrosAdicionalesPage implements OnInit {

  public cobro: RecargoAdicional;
  public status;

  constructor(public _cobroAdicionalService: RecargosAdicionalesService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Cobro Adicional',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        cssClass: 'rojo',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Editar',
        icon: 'create',
        cssClass: 'azul',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Ver',
        icon: 'eye',
        cssClass: 'celeste',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  //end ActionSheetController

  ngOnInit() {
    this.listaCobroAdiconal()
  }

  listaCobroAdiconal(){
    this._cobroAdicionalService.getRecargosAdicionales().subscribe(
      response=>{
        this.cobro = response;
      }

    )
  }

}
