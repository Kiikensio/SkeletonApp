import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) {}

  inputValue: string = '';
  horaActual: string = '';
  maskedPassword: string = '';
  password: string = '';

  ngOnInit() {
    this.actualizarHora();
    setInterval(() => this.actualizarHora(), 1000); // Actualiza la hora cada segundo
  }

  

  actualizarHora() {
    const ahora = new Date();
    this.horaActual = ahora.toLocaleTimeString();
  }

  redirigirAPagina() {
    this.router.navigate(['home']);
  }

  maskPassword() {
    // Oculta la contraseña mostrando "****" en lugar de los caracteres reales.
    this.maskedPassword = '*'.repeat(this.password.length);
  }

  submitForm() {
    // Aquí puedes realizar acciones con el valor ingresado, como enviarlo a un servidor o procesarlo de alguna manera.
    console.log('Valor ingresado:', this.inputValue);
    console.log('Contraseña ingresada:', this.password);
  }
}
