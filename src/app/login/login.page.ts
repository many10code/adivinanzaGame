import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = '';
  password: string = '';
  constructor(private router: Router) {}
  ngOnInit() {}
  onClickIngresar(form: NgForm) {
    if (form.invalid) {
      console.log('Debes completar todos los campos');
      return;
    }
    this.router.navigate(['/menu']);
  }
}
