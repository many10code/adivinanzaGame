import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GameApiService } from '../services/game-api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  usuario: string = '';
  correo: string = '';
  password: string = '';
  passwordVisible: boolean = false; // Controla la visibilidad de la contraseña

  constructor(
    private router: Router,
    private gameApiService: GameApiService,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  async onClickRegistrar(form: NgForm) {
    if (form.invalid) {
      this.showAlert('Error', 'Debes completar todos los campos obligatorios.');
      return;
    }
    try {
      const response = await this.gameApiService.register(
        this.correo,
        this.usuario,
        this.password
      );
      await this.showAlert('Éxito', 'Registro exitoso. Ahora puedes iniciar sesión.');
      this.router.navigate(['/login']);
    } catch (error) {
      this.showAlert('Error', 'Error en el registro. Por favor, inténtalo de nuevo.');
      console.error('Error en el registro:', error);
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
