import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  result: any = '';

  constructor() { }

  ngOnInit(): void {
  }

  primeiraLetraMaiuscula(value: any) {
    return this.result = value[0].toUpperCase() + value.substr(1).toLowerCase();
  }

  textoMaiusculo(value: any) {
    return this.result = value.toLocaleUpperCase();
  }

  textoMinusculo(value: any) {
    return this.result = value.toLocaleLowerCase();
  }

  primeiraLetraDaStringMaiuscula(value: any) {
    return this.result = value.toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
  }

  textoAlternadoPrimeiraLetra(value: any) {
    return this.result = value.split('').map((c,i) => 
        i % 2 == 0 ? c.toUpperCase() : c.toLowerCase()
    ).join('');  
  }

  textoAlternadoSegundaLetra(value: any) {
    return this.result = value.split('').map((c,i) => 
        i % 2 == 0 ? c.toLowerCase() : c.toUpperCase()
    ).join('');  
  }

}
