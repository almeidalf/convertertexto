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

  primeiraLetraMaiscula(value:any){
    return this.result = value[0].toUpperCase() + value.substr(1).toLowerCase();
  }

  textoMaisculo(value:any){
    return this.result = value.toLocaleUpperCase();
  }

  textoMinusculo(value:any){
    return this.result = value.toLocaleLowerCase();
}

}
