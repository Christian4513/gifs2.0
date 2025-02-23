import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

/**
 * Representa la página principal donde se muestran los gifs.
 *
 * @component
 * @example
 * <gifs-home-page></gifs-home-page>
 */
@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  /**
   * Constructor del componente HomePage.
   *
   * @param {GifsService} gifsService - Servicio utilizado para gestionar las búsquedas y resultados de gifs.
   */
  constructor(private gifsService: GifsService) {}

  /**
   * Obtiene la lista de gifs desde el servicio GifsService.
   *
   * @returns {Gif[]} Lista de gifs.
   */
  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }

}
