import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  /** Variable para controlar la activación de la alerta */
  private alertShown: boolean = false;

  /**
   * Constructor del servicio de alertas.
   * @param toastr - Servicio Toastr para la creación de alertas.
   */
  constructor(private toastr: ToastrService) {}

  /**
   * Envía un mensaje de éxito utilizando Toastr.
   * @param message - Mensaje de éxito que se mostrará.
   * @param title - Título del mensaje de éxito.
   */
  showSuccess(message: string, title: string): void {
    if (!this.alertShown) {
      this.toastr.success(message, title);
      this.alertShown = true;

      // Reinicia el estado después de 2 segundos.
      setTimeout(() => {
        this.alertShown = false;
      }, 2000);
    }
  }

  /**
   * Envía un mensaje de error utilizando Toastr.
   * @param message - Mensaje de error que se mostrará.
   * @param title - Título del mensaje de error.
   */
  showError(message: string, title: string): void {
    if (!this.alertShown) {
      this.toastr.error(message, title);
      this.alertShown = true;

      // Reinicia el estado después de 2 segundos.
      setTimeout(() => {
        this.alertShown = false;
      }, 2000);
    }
  }
}

