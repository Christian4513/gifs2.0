import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';

/**
 * Módulo compartido que contiene componentes reutilizables.
 * @description Este módulo proporciona el SidebarComponent y LazyImageComponent para su uso en toda la aplicación.
 */
@NgModule({
  declarations: [
    /**
     * Componente de la barra lateral que se utiliza para la navegación.
     */
    SidebarComponent,

    /**
     * Componente de imagen con carga diferida para optimizar el rendimiento.
     */
    LazyImageComponent
  ],
  imports: [
    /**
     * Módulo común de Angular que proporciona directivas y servicios básicos.
     */
    CommonModule
  ],
  exports: [
    /**
     * Exporta SidebarComponent para que otros módulos puedan usarlo.
     */
    SidebarComponent,

    /**
     * Exporta LazyImageComponent para que otros módulos puedan usarlo.
     */
    LazyImageComponent
  ]
})
export class SharedModule { }

