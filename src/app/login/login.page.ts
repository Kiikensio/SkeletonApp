import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  horaActual: string = '';

  ngOnInit() {
    this.actualizarHora();
    setInterval(() => this.actualizarHora(), 1000); // Actualiza la hora cada segundo
  }

  actualizarHora() {
    const ahora = new Date();
    this.horaActual = ahora.toLocaleTimeString();
  }

}
