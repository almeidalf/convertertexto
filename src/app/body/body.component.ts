import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})

export class BodyComponent implements OnInit {
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
