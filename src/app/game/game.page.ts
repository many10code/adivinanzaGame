import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  numero: Number = 0;
 mensaje: string = '';

  ngOnInit() {}

  onClickAdivinar() {
  }

  onClickReiniciar() {
 
  }

}
