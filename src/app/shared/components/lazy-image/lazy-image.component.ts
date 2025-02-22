import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})

export class LazyImageComponent implements OnInit {

  @Input() public url!: string; // se recibe URL del componente gif-card

  @Input() public alt: string = ""; // se recibe alt del componente gif-card

  public hasLoaded: boolean = false; // booleano de carga de loader.

  // ejecuta al iniciar
  ngOnInit(): void {
    // Verificación para asegurar que se ha proporcionado la URL, de lo contrario lanza un error.
    if (!this.url) {
      throw new Error('URL property is required');
    }
  }

  // Método que se ejecuta cuando la imagen se ha cargado
  onLoad(): void {
    // actualizar la propiedad hasLoaded después de 1 segundo para eliminar imagen loader.
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }
}
