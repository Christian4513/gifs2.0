import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})

export class LazyImageComponent implements OnInit {

  /**
   * URL de la imagen que se va a cargar.
   * Este valor es proporcionado por el componente padre (gif-card).
   */
  @Input() public url!: string;

  /**
   * Texto alternativo para la imagen.
   * Este valor es proporcionado por el componente padre (gif-card).
   */
  @Input() public alt: string = "";

  /**
   * Indica si la imagen se ha cargado.
   * Inicialmente, se establece en false hasta que la imagen se cargue completamente.
   */
  public hasLoaded: boolean = false;

  /**
   * Método del ciclo de vida de Angular que se ejecuta al inicializar el componente.
   * Verifica que se haya proporcionado la URL, de lo contrario lanza un error.
   */
  ngOnInit(): void {
    if (!this.url) {
      throw new Error('URL property is required');
    }
  }

  /**
   * Método que se ejecuta cuando la imagen se ha cargado completamente.
   * Actualiza la propiedad hasLoaded después de 1 segundo para eliminar la imagen de carga.
   */
  onLoad(): void {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }
}

