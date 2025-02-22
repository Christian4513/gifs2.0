import { Component, ElementRef, Inject, inject, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

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

  // Referencia al elemento de entrada de etiqueta en la plantilla.
  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>;

  // Inyección del servicio GifsService.
  constructor(private gifsService: GifsService) {}

  // Método para buscar una nueva etiqueta.
  searchTag(): void {

    // Obtiene el valor actual de la entrada de etiqueta.
    const newTag = this.tagInput.nativeElement.value;

    // Utiliza el servicio para buscar la nueva etiqueta.
    this.gifsService.searchTag(newTag);

    // Limpia el valor de la entrada de etiqueta.
    this.tagInput.nativeElement.value = "";
  }
}
