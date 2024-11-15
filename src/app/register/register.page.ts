import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  usuario: string = '';
  correo: string = '';
  password: string = '';
  constructor(
  private router: Router
  ) { }
  ngOnInit() {}

  onClickRegistrar(form: NgForm){
    if(form.invalid) {
    console.log('Debes completar todos los campos');
    return;
    }
    this.router.navigate(['/login']);
    }
   

}
