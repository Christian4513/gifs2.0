import { Component } from '@angular/core';

/**
 * Representa el componente raíz de la aplicación.
 *
 * @component
 * @example
 * <app-root></app-root>
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /**
   * El título de la aplicación.
   *
   * @type {string}
   */
  title: string = 'gifs-app';
}
