import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

/**
 * Representa el componente Sidebar que muestra el historial de etiquetas de búsqueda.
 *
 * @component
 * @example
 * <shared-sidebar></shared-sidebar>
 */
@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  /**
   * Constructor para el componente Sidebar.
   *
   * @param {GifsService} gifsService - Servicio utilizado para manejar las búsquedas de gifs.
   */
  constructor(private gifsService: GifsService) { }

  /**
   * Obtiene el historial de gifs de búsqueda.
   *
   * @returns {string[]} Arreglo de strings con los gifs de búsqueda.
   */
  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  /**
   * Realiza una búsqueda de gifs basada en la etiqueta proporcionada.
   *
   * @param {string} tag - La etiqueta de búsqueda utilizada para encontrar gifs.
   */
  searchTag(tag: string): void {
    this.gifsService.searchTag(tag);
  }

}

