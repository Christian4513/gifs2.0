import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsService } from '../../services/gifs.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.css']
})
export class GifsCardComponent implements OnInit {

  /**
   * Propiedad de entrada que recibe las propiedades de gif del componente card-list con un enlace.
   * @type {Gif}
   */
  @Input() public gif!: Gif;

  /**
   * Constructor del componente GifsCard.
   * @param gifsService - Servicio utilizado para manejar las búsquedas de gifs.
   * @param alertService - Servicio utilizado para mostrar mensajes de alerta.
   */
  constructor(private gifsService: GifsService, private alertService: AlertService) {}

  /**
   * Método del ciclo de vida de Angular que se ejecuta al inicializar el componente.
   * Verifica si la propiedad 'gif' no está definida o es null, lanzando un error si es así.
   */
  ngOnInit(): void {
    if (!this.gif) {
      throw new Error('Gif property is required');
    }
  }

  /**
   * Copia la URL del gif al portapapeles.
   * @param url - La URL del gif que se va a copiar.
   */
  copyToClipboard(url: string): void {
    this.gifsService.copyGif(url);
  }

}

