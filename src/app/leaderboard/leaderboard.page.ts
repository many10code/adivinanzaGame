import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {
  players: leaderboardItem[] = [];
  constructor() {}
  ngOnInit() {}
}
interface leaderboardItem {
  usuario: string;
  puntos: number;
  partidas_jugadas: number;
}
