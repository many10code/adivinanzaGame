import { Component, OnInit } from '@angular/core';
import { GameApiService } from '../services/game-api.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  numero: number = 0;
  mensaje: string = '';

  constructor(private gameApiService: GameApiService) {}

  ngOnInit() {
    this.iniciarJuego();
  }
  async iniciarJuego() {
    try {
      await this.gameApiService.start();
      this.mensaje = '¡El juego ha comenzado! Adivina un número entre 1 y 100.';
    } catch (error) {
      console.error('Error al iniciar el juego:', error);
      this.mensaje =
        'Error al iniciar el juego. Por favor, inténtalo de nuevo.';
    }
  }
  async onClickAdivinar() {
    try {
      const response = await this.gameApiService.guess(this.numero);
      this.mensaje = response.message;
    } catch (error) {
      console.error('Error al adivinar el número:', error);
      this.mensaje =
        'Error al adivinar el número. Por favor, inténtalo de nuevo.';
    }
  }
  async onClickReiniciar() {
    try {
      await this.gameApiService.restart();
      this.mensaje =
        'El juego se ha reiniciado. ¡Adivina un número entre 1 y 100!';
    } catch (error) {
      console.error('Error al reiniciar el juego:', error);
      this.mensaje =
        'Error al reiniciar el juego. Por favor, inténtalo de nuevo.';
    }
  }
}
