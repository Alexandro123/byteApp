import { Component, OnInit } from '@angular/core';
import { TipoPrestamo } from 'src/app/models/tipoPrestamo.model';
import { TipoPrestamoService } from 'src/app/services/tipoPrestamo.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tipos-de-prestamos',
  templateUrl: './tipos-de-prestamos.page.html',
  styleUrls: ['./tipos-de-prestamos.page.scss'],
  providers: [TipoPrestamoService]
})
export class TiposDePrestamosPage implements OnInit {

  public prestamo: TipoPrestamo;
  public status;

  constructor(public _tipoPrestamoService: TipoPrestamoService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Tipo de Prestamo',
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
    this.listaTipoDePrestamo()
  }

  listaTipoDePrestamo(){
    this._tipoPrestamoService.getTipoPrestamo().subscribe(
      response=>{
        this.prestamo = response;
      }

    )
  }


}
