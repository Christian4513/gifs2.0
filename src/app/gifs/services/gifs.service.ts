import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  /** Lista de gifs obtenidos de la búsqueda */
  public gifList: Gif[] = [];

  /** Historial de etiquetas de búsqueda */
  private _tagsHistory: string[] = [];

  /** Clave de API para acceder al servicio de GIPHY */
  private apiKey: string = 'uheOpEFOROI2BoaHlb88W7FkidGZjVrm';

  /** URL del servicio de GIPHY */
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs'

  /**
   * Constructor del servicio de gifs.
   * @param http - Servicio HTTP para realizar solicitudes.
   * @param alertService - Servicio de alertas para mostrar mensajes al usuario.
   */
  constructor(private http: HttpClient, private alertService: AlertService) {
    this.loadLocalStorage();
    this.tagsHistory;
  }

  /**
   * Busca una etiqueta y actualiza el historial de etiquetas.
   * @param tag - Etiqueta de búsqueda.
   */
  searchTag(tag: string): void {
    if (tag.length === 0) return; // Si la etiqueta está vacía, no hacer nada y salir de la función.

    // Organiza el historial de etiquetas, asegurando que no haya duplicados y limitando el tamaño del historial.
    this.organizeHistory(tag);

    // Crear y configurar los parámetros de la solicitud HTTP.
    const params = new HttpParams()
      .set('api_key', this.apiKey) // Establece el parámetro de la clave de API.
      .set('limit', '10') // Limita la búsqueda a 10 resultados.
      .set('q', tag); // Establece la etiqueta de búsqueda.

    // Realiza la solicitud HTTP GET al servicio de búsqueda de GIPHY.
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params: params })
      .subscribe(resp => {
        // Maneja la respuesta de la solicitud HTTP.
        this.gifList = resp.data;
        console.log('gifs:', this.gifList);
      });

    // Imprime el historial de etiquetas actualizado en la consola para depuración.
    console.log(this.tagsHistory);
  }

  /**
   * Retorna una copia del historial de etiquetas de búsqueda.
   * @returns Copia del historial de etiquetas.
   */
  get tagsHistory() {
    return [...this._tagsHistory];
  }

  /**
   * Organiza el historial de etiquetas asegurando que no haya duplicados y limitando el tamaño del historial.
   * @param tag - Etiqueta de búsqueda a organizar.
   */
  private organizeHistory(tag: string) {
    // Convierte tag de mayúsculas a minúsculas.
    tag = tag.toLowerCase();

    // Verifica si tag ya existe en el historial.
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag); // Añade tag al principio del historial.
    this._tagsHistory = this.tagsHistory.splice(0, 10); // Limita el historial a las últimas 10 etiquetas.

    this.saveLocalStorage(); // Guarda el historial de gifs en el almacenamiento local
  }

  /**
   * Guarda el historial de etiquetas en el almacenamiento local del navegador.
   */
  private saveLocalStorage(): void {
    // Verifica si localStorage está disponible en el entorno actual.
    if (typeof localStorage !== 'undefined') {
      // Convierte el objeto _tagsHistory a una cadena JSON y lo guarda en localStorage bajo la clave 'history'.
      localStorage.setItem('history', JSON.stringify(this._tagsHistory));
    }
    // Si localStorage no está disponible, no hace nada.
  }

  /**
   * Carga el historial de gifs desde el almacenamiento local.
   */
  private loadLocalStorage(): void {
    // Verifica si localStorage está disponible en el entorno actual.
    if (typeof localStorage !== 'undefined') {
      // Intenta obtener el ítem 'history' desde localStorage.
      const data = localStorage.getItem('history');
      // Si hay datos disponibles, los convierte de cadena JSON a objeto y los asigna a _tagsHistory.
      if (data) {
        this._tagsHistory = JSON.parse(data);
        this.searchTag(this.tagsHistory[0]); // Se carga el último llamado registrado de gifs.
      }
    }
    // Si localStorage no está disponible, no hace nada.
  }

  /**
   * Copia una URL al portapapeles.
   * @param url - URL que se va a copiar.
   */
  copyGif(url: string): void {
    // Verifica si el navegador soporta el API del portapapeles.
    if (navigator.clipboard) {
      // Escribe la URL en el portapapeles.
      navigator.clipboard.writeText(url).then(() => {
        // Muestra un mensaje de éxito en la consola si la URL se copia correctamente.
        this.alertService.showSuccess("Listo", "Gif copiado");
        console.log('URL copiada al portapapeles:', url);
      }).catch(err => {
        // Muestra un mensaje de error en la consola si hay un problema al copiar la URL.
        console.error('Error al copiar la URL:', err);
        this.alertService.showError("Error", "El gif no fue copiado");
      });
    } else {
      // Muestra un mensaje de error si el API del portapapeles no está disponible en el navegador.
      console.error('El API del portapapeles no está disponible en este navegador.');
    }
  }
}




