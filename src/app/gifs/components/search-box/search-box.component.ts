import { Component, ElementRef, Inject, inject, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { AlertService } from '../../services/alert.service';

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
  constructor(private gifsService: GifsService,private alertService: AlertService) {}

  // Método para buscar una nueva etiqueta.
  searchTag(): void {

    // Obtiene el valor actual de la entrada de etiqueta.
    const newTag = this.tagInput.nativeElement.value;
    // valiidación que entrega error si se ingresa en el input mas de 25 caracteres
    if (newTag.length > 25) { // Verifica si la longitud del texto ingresado es mayor a 25 caracteres
      this.alertService.showError("Error", "Ingresa un texto menor a 25 caracteres"); // Muestra un mensaje de error indicando que el texto es demasiado largo
      this.tagInput.nativeElement.value = ""; // Limpia el valor del input para que el usuario pueda ingresar un nuevo texto
      return; // Sale de la función sin ejecutar el código que sigue (no se realiza la búsqueda del gif)
  }


    // Utiliza el servicio para buscar la nueva etiqueta.
    this.gifsService.searchTag(newTag);

    // Limpia el valor de la entrada de etiqueta.
    this.tagInput.nativeElement.value = "";
  }
}
