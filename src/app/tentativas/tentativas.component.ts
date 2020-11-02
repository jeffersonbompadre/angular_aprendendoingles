import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]
  
  @Input() public tentativas: number

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.tentativas !== this.coracoes.length) {
      let indice = (this.coracoes.length - this.tentativas) - 1
      this.coracoes[indice].cheio = false
    }
  }
}
