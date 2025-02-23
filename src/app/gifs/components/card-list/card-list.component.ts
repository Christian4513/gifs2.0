import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

/**
 * Representa una lista de tarjetas de gifs.
 *
 * @component
 * @example
 * <gifs-card-list [gifs]="gifList"></gifs-card-list>
 */
@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html'
})
export class CardListComponent {

  /**
   * Propiedad de entrada que recibe los gifs del componente home-page.
   *
   * @type {Gif[]}
   */
  @Input() public gifs: Gif[] = [];
}
