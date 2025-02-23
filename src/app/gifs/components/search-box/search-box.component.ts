import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { AlertService } from '../../services/alert.service';

/**
 * Representa el componente de caja de búsqueda de gifs.
 *
 * @component
 * @example
 * <gifs-search-box></gifs-search-box>
 */
@Component({
  selector: 'gifs-search-box',
  template:
  `<h5>Buscar:</h5>
   <input
    type="text"
    class="form-control"
    placeholder="Buscar gifs..."
    (keyup.enter)="searchTag()"
    #txtTagInput>`
})
export class SearchBoxComponent {

  /**
   * Referencia al elemento de entrada de etiqueta en la plantilla.
   *
   * @type {ElementRef<HTMLInputElement>}
   */
  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>;

  /**
   * Constructor del componente SearchBox.
   *
   * @param {GifsService} gifsService - Servicio utilizado para manejar las búsquedas de gifs.
   * @param {AlertService} alertService - Servicio utilizado para mostrar mensajes de alerta.
   */
  constructor(private gifsService: GifsService, private alertService: AlertService) {}

  /**
   * Método para buscar una nueva etiqueta.
   *
   * @returns {void}
   */
  searchTag(): void {
    // Obtiene el valor actual de la entrada de etiqueta.
    const newTag = this.tagInput.nativeElement.value;

    // Validación que entrega error si se ingresa en el input más de 25 caracteres.
    if (newTag.length > 25) {
      this.alertService.showError("Error", "Ingresa un texto menor a 25 caracteres");
      this.tagInput.nativeElement.value = "";
      return;
    }

    // Utiliza el servicio para buscar la nueva etiqueta.
    this.gifsService.searchTag(newTag);

    // Limpia el valor de la entrada de etiqueta.
    this.tagInput.nativeElement.value = "";
  }
}
