import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) {}

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
