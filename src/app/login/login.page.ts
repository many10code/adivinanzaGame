import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GameApiService } from '../services/game-api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private api: GameApiService,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async onClickIngresar(form: NgForm) {
    if (form.invalid) {
      this.presentToast('Debes completar todos los campos', 'danger');
      return;
    }
    await this.api
      .login(this.usuario, this.password)
      .then(() => {
        this.presentToast('Inicio de sesión exitoso', 'success');
        this.router.navigate(['/menu']);
      })
      .catch((data) => {
        this.presentToast(data.error.message, 'danger');
        console.error('LOGIN:', data.error.message);
      });
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 2000,
    });
    toast.present();
  }
}
