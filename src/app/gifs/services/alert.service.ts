import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertShown: boolean = false; // Variable para controlar la activación de la alerta

  constructor(private toastr: ToastrService) {} // Injección de Toastr para la creación de alertas

  // Envia mensaje de exito
  showSuccess(message: string, title: string): void {
    if (!this.alertShown) {
      this.toastr.success(message, title);
      this.alertShown = true;

      // Reinicia el estado después de 2 seg
      setTimeout(() => {
        this.alertShown = false;
      }, 2000);
    }
  }

  // envia un mensaje de error
  showError(message: string, title: string): void {
    if (!this.alertShown) {
      this.toastr.error(message, title);
      this.alertShown = true;

      // Reinicia el estado después de 2 seg
      setTimeout(() => {
        this.alertShown = false;
      }, 2000);
    }
  }
}
