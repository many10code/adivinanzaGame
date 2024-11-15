import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GameApiService } from '../services/game-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  usuario: string = '';
  correo: string = '';
  password: string = '';
  constructor(private router: Router, private gameApiService: GameApiService) {}
  ngOnInit() {}

  async onClickRegistrar(form: NgForm) {
    if (form.invalid) {
      console.log('Debes completar todos los campos');
      return;
    }
    try {
      const response = await this.gameApiService.register(
        this.correo,
        this.usuario,
        this.password
      );
      console.log('Registro exitoso:', response);
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error en el registro:', error);
      alert('Error en el registro. Por favor, inténtalo de nuevo.');
    }
  }
}
