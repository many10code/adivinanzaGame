import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string= ""; 
  password: string= "";

  constructor( private navCtrl:NavController) { }

  ngOnInit() {
  }

  register() { 
    this.navCtrl.navigateForward('/register'); 
  }

  entrar(){
    this.navCtrl.navigateForward('/menu')
  }
}
