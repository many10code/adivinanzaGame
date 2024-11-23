import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { GameApiService } from '../services/game-api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController,
    private gameApiService: GameApiService
  ) { }

  ngOnInit() {
  }

  async confirmarSalida() {
    const alert = await this.alertController.create({
      header: 'Confirmar salida',
      message: '¿Estás seguro de que deseas salir del juego?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Salir',
          handler: () => {
            this.gameApiService.logout();
            this.navCtrl.navigateRoot('/login');
          },
        },
      ],
    });

    await alert.present();
  }
}
