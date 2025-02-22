import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsService } from '../../services/gifs.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css'
})
export class GifsCardComponent implements OnInit {

  @Input() public gif!: Gif; // recibe las propiedades de gif del componente card-list con un enlace

  constructor(private gifsService: GifsService, private alertService: AlertService){}

  ngOnInit(): void {
    // Verifica si la propiedad 'gif' no está definida o es null
    if (!this.gif) {
      // Lanza un error indicando que la propiedad 'gif' es requerida
      throw new Error('Gif property is required');
    }
  }

  // Copia la URL se el gif
  copyToClipboard(url: string){
    this.gifsService.copyGif(url);
  }

}

