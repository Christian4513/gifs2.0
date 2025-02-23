/**
 * Interfaz que representa la respuesta de búsqueda de GIPHY.
 */
export interface SearchResponse {
  /** Lista de gifs obtenidos de la búsqueda */
  data: Gif[];
  /** Metadatos de la respuesta */
  meta: Meta;
  /** Información de paginación de la respuesta */
  pagination: Pagination;
}

/**
 * Interfaz que define la estructura de un gif.
 */
export interface Gif {
  /** Tipo de contenido (gif, sticker, etc.) */
  type: string;
  /** Identificador único del gif */
  id: string;
  /** URL del gif */
  url: string;
  /** Slug del gif */
  slug: string;
  /** URL corta del gif en Bitly */
  bitly_gif_url: string;
  /** URL corta en Bitly */
  bitly_url: string;
  /** URL para incrustar el gif */
  embed_url: string;
  /** Nombre de usuario del creador del gif */
  username: string;
  /** Fuente del gif */
  source: string;
  /** Título del gif */
  title: string;
  /** Clasificación del gif */
  rating: string;
  /** URL del contenido del gif */
  content_url: string;
  /** Dominio de la fuente del gif */
  source_tld: string;
  /** URL de la publicación de la fuente */
  source_post_url: string;
  /** Indica si es un sticker */
  is_sticker: number;
  /** Fecha de importación del gif */
  import_datetime: Date;
  /** Fecha en que el gif se volvió tendencia */
  trending_datetime: string;
  /** Imágenes relacionadas con el gif */
  images: Images;
  /** Información del usuario que subió el gif */
  user: User;
  /** Payload de respuesta de analytics */
  analytics_response_payload: string;
  /** Información de analytics del gif */
  analytics: Analytics;
  /** Texto alternativo del gif */
  alt_text: string;
}

/**
 * Interfaz que define la estructura de los datos de analytics del gif.
 */
export interface Analytics {
  /** Información de analytics al cargar el gif */
  onload: Onclick;
  /** Información de analytics al hacer clic en el gif */
  onclick: Onclick;
  /** Información de analytics al enviar el gif */
  onsent: Onclick;
}

/**
 * Interfaz que define la estructura de los datos de un clic de analytics.
 */
export interface Onclick {
  /** URL del evento de clic */
  url: string;
}

/**
 * Interfaz que define la estructura de las imágenes del gif.
 */
export interface Images {
  /** Imagen original del gif */
  original: FixedHeight;
  /** Imagen redimensionada del gif */
  downsized: The480_WStill;
  /** Imagen grande redimensionada del gif */
  downsized_large: The480_WStill;
  /** Imagen mediana redimensionada del gif */
  downsized_medium: The480_WStill;
  /** Imagen pequeña redimensionada del gif */
  downsized_small: DownsizedSmall;
  /** Imagen redimensionada del gif (solo vista previa) */
  downsized_still: The480_WStill;
  /** Imagen redimensionada del gif (altura fija) */
  fixed_height: FixedHeight;
  /** Imagen redimensionada del gif (altura fija y submuestreada) */
  fixed_height_downsampled: FixedHeight;
  /** Imagen pequeña redimensionada del gif (altura fija) */
  fixed_height_small: FixedHeight;
  /** Imagen pequeña redimensionada del gif (altura fija, solo vista previa) */
  fixed_height_small_still: The480_WStill;
  /** Imagen redimensionada del gif (altura fija, solo vista previa) */
  fixed_height_still: The480_WStill;
  /** Imagen redimensionada del gif (ancho fijo) */
  fixed_width: FixedHeight;
  /** Imagen redimensionada del gif (ancho fijo y submuestreada) */
  fixed_width_downsampled: FixedHeight;
  /** Imagen pequeña redimensionada del gif (ancho fijo) */
  fixed_width_small: FixedHeight;
  /** Imagen pequeña redimensionada del gif (ancho fijo, solo vista previa) */
  fixed_width_small_still: The480_WStill;
  /** Imagen redimensionada del gif (ancho fijo, solo vista previa) */
  fixed_width_still: The480_WStill;
  /** Información de bucle del gif */
  looping: Looping;
  /** Imagen original del gif (solo vista previa) */
  original_still: The480_WStill;
  /** Video MP4 original del gif */
  original_mp4: DownsizedSmall;
  /** Video MP4 de vista previa del gif */
  preview: DownsizedSmall;
  /** Imagen de vista previa del gif en formato GIF */
  preview_gif: The480_WStill;
  /** Imagen de vista previa del gif en formato WebP */
  preview_webp: The480_WStill;
  /** Imagen redimensionada del gif en ancho fijo (480 px) */
  "480w_still": The480_WStill;
}

/**
 * Interfaz que define la estructura de una imagen redimensionada del gif.
 */
export interface The480_WStill {
  /** Altura de la imagen */
  height: string;
  /** Ancho de la imagen */
  width: string;
  /** Tamaño del archivo de la imagen */
  size: string;
  /** URL de la imagen */
  url: string;
}

/**
 * Interfaz que define la estructura de una imagen redimensionada en formato MP4.
 */
export interface DownsizedSmall {
  /** Altura de la imagen */
  height: string;
  /** Ancho de la imagen */
  width: string;
  /** Tamaño del archivo MP4 */
  mp4_size: string;
  /** URL del archivo MP4 */
  mp4: string;
}

/**
 * Interfaz que define la estructura de una imagen con altura o ancho fijo.
 */
export interface FixedHeight {
  /** Altura de la imagen */
  height: string;
  /** Ancho de la imagen */
  width: string;
  /** Tamaño del archivo de la imagen */
  size: string;
  /** URL de la imagen */
  url: string;
  /** (Opcional) Tamaño del archivo MP4 */
  mp4_size?: string;
  /** (Opcional) URL del archivo MP4 */
  mp4?: string;
  /** Tamaño del archivo WebP */
  webp_size: string;
  /** URL de la imagen en formato WebP */
  webp: string;
  /** (Opcional) Número de fotogramas de la imagen */
  frames?: string;
  /** (Opcional) Hash de la imagen */
  hash?: string;
}

/**
 * Interfaz que define la estructura de los datos de bucle del gif.
 */
export interface Looping {
  /** Tamaño del archivo MP4 */
  mp4_size: string;
  /** URL del archivo MP4 */
  mp4: string;
}

/**
 * Interfaz que define la estructura del usuario que subió el gif.
 */
export interface User {
  /** URL del avatar del usuario */
  avatar_url: string;
  /** Imagen de banner del usuario */
  banner_image: string;
  /** URL del banner del usuario */
  banner_url: string;
  /** URL del perfil del usuario */
  profile_url: string;
  /** Nombre de usuario */
  username: string;
  /** Nombre a mostrar del usuario */
  display_name: string;
  /** Descripción del usuario */
  description: string;
  /** URL de Instagram del usuario */
  instagram_url: string;
  /** URL del sitio web del usuario */
  website_url: string;
  /** Indica si el usuario está verificado */
  is_verified: boolean;
}

/**
 * Interfaz que define la estructura de los metadatos de la respuesta.
 */
export interface Meta {
  /** Estado de la respuesta */
  status: number;
  /** Mensaje de la respuesta */
  msg: string;
  /** ID de la respuesta */
  response_id: string;
}

/**
 * Interfaz que define la estructura de los datos de paginación.
 */
export interface Pagination {
  /** Número total de resultados */
  total_count: number;
  /** Número de resultados en la página actual */
  count: number;
  /** Offset para la siguiente página de resultados */
  offset: number;
}
