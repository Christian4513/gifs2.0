import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

/**
 * Módulo GifsModule que contiene componentes y páginas relacionados con gifs.
 * @description Este módulo declara y proporciona componentes relacionados con la funcionalidad de gifs, incluyendo la página principal.
 */
@NgModule({
  declarations: [
    /**
     * Componente que muestra una lista de tarjetas de gifs.
     */
    CardListComponent,

    /**
     * Componente individual de tarjeta de gif.
     */
    GifsCardComponent,

    /**
     * Componente de la página principal que contiene la interfaz principal de la aplicación.
     */
    HomePageComponent,

    /**
     * Componente que proporciona una caja de búsqueda para encontrar gifs.
     */
    SearchBoxComponent
  ],
  imports: [
    /**
     * Módulo común de Angular que proporciona directivas y servicios básicos.
     */
    CommonModule,

    /**
     * Módulo compartido que contiene componentes reutilizables.
     */
    SharedModule
  ],
  exports: [
    /**
     * Exporta HomePageComponent para que otros módulos puedan usarlo.
     */
    HomePageComponent
  ]
})
export class GifsModule { }

