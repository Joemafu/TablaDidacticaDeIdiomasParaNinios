import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCardSubtitle, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonFab, IonIcon, IonFabButton, IonFabList, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonFabList, IonFabButton, IonIcon, IonFab, IonButton, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  
  authService: AuthService = inject(AuthService);

  currentLanguage: 'es' | 'en' | 'pt' = 'es'; // Definir tipos explícitos
  currentTheme: 'colores' | 'numeros' | 'animales' = 'colores'; // Definir tipos explícitos
  sounds: any = {};
  images: any = {};
  flagIcon: string = 'assets/img/es.png';  // Bandera por defecto
  themeIcon: string = 'paw-sharp';  // Ícono de animales por defecto

  
  // Cargar sonidos de acuerdo al idioma y tema
  loadSounds() {
    const allSounds = {
      'es': {
        'colores': ['assets/sounds/es/colores/e_rojo.ogg', 'assets/sounds/es/colores/e_verde.ogg', 'assets/sounds/es/colores/e_azul.ogg', 'assets/sounds/es/colores/e_amarillo.ogg', 'assets/sounds/es/colores/e_naranja.ogg', 'assets/sounds/es/colores/e_violeta.ogg'],
        'numeros': ['assets/sounds/es/numeros/e_1.ogg', 'assets/sounds/es/numeros/e_2.ogg', 'assets/sounds/es/numeros/e_3.ogg', 'assets/sounds/es/numeros/e_4.ogg', 'assets/sounds/es/numeros/e_5.ogg', 'assets/sounds/es/numeros/e_6.ogg'],
        'animales': ['assets/sounds/es/animales/e_gato.ogg', 'assets/sounds/es/animales/e_perro.ogg', 'assets/sounds/es/animales/e_mono.ogg', 'assets/sounds/es/animales/e_ardilla.ogg', 'assets/sounds/es/animales/e_caballo.ogg', 'assets/sounds/es/animales/e_vaca.ogg']
      },
      'en': {
        'colores': ['assets/sounds/en/colores/i_rojo.ogg', 'assets/sounds/en/colores/i_verde.ogg', 'assets/sounds/en/colores/i_azul.ogg', 'assets/sounds/en/colores/i_amarillo.ogg', 'assets/sounds/en/colores/i_naranja.ogg', 'assets/sounds/en/colores/i_violeta.ogg'],
        'numeros': ['assets/sounds/en/numeros/i_1.ogg', 'assets/sounds/en/numeros/i_2.ogg', 'assets/sounds/en/numeros/i_3.ogg', 'assets/sounds/en/numeros/i_4.ogg', 'assets/sounds/en/numeros/i_5.ogg', 'assets/sounds/en/numeros/i_6.ogg'],
        'animales': ['assets/sounds/en/animales/i_gato.ogg', 'assets/sounds/en/animales/i_perro.ogg', 'assets/sounds/en/animales/i_mono.ogg', 'assets/sounds/en/animales/i_ardilla.ogg', 'assets/sounds/en/animales/i_caballo.ogg', 'assets/sounds/en/animales/i_vaca.ogg']
      },
      'pt': {
        'colores': ['assets/sounds/pt/colores/p_rojo.ogg', 'assets/sounds/pt/colores/p_verde.ogg', 'assets/sounds/pt/colores/p_azul.ogg', 'assets/sounds/pt/colores/p_amarillo.ogg', 'assets/sounds/pt/colores/p_naranja.ogg', 'assets/sounds/pt/colores/p_violeta.ogg'],
        'numeros': ['assets/sounds/pt/numeros/p_1.ogg', 'assets/sounds/pt/numeros/p_2.ogg', 'assets/sounds/pt/numeros/p_3.ogg', 'assets/sounds/pt/numeros/p_4.ogg', 'assets/sounds/pt/numeros/p_5.ogg', 'assets/sounds/pt/numeros/p_6.ogg'],
        'animales': ['assets/sounds/pt/animales/p_gato.ogg', 'assets/sounds/pt/animales/p_perro.ogg', 'assets/sounds/pt/animales/p_mono.ogg', 'assets/sounds/pt/animales/p_ardilla.ogg', 'assets/sounds/pt/animales/p_caballo.ogg', 'assets/sounds/pt/animales/p_vaca.ogg']
      }
    };

    this.sounds = allSounds[this.currentLanguage][this.currentTheme];
  }

  // Cargar las imágenes según el tema seleccionado
  loadImages() {
    const allImages = {
      'colores': ['assets/images/colores/rojo.svg', 'assets/images/colores/verde.svg', 'assets/images/colores/azul.svg', 'assets/images/colores/amarillo.svg', 'assets/images/colores/naranja.svg', 'assets/images/colores/violeta.svg'],
      'numeros': ['assets/images/numeros/1.png', 'assets/images/numeros/2.png', 'assets/images/numeros/3.png', 'assets/images/numeros/4.png', 'assets/images/numeros/5.png', 'assets/images/numeros/6.png'],
      'animales': ['assets/images/animales/gato.png', 'assets/images/animales/perro.png', 'assets/images/animales/mono.png', 'assets/images/animales/ardilla.png', 'assets/images/animales/caballo.png', 'assets/images/animales/vaca.png']
    };

    this.images = allImages[this.currentTheme];
  }

  constructor() {
    this.currentLanguage = 'es';
    this.currentTheme = 'animales';
    this.loadSounds(); // Cargar sonidos iniciales
    this.loadImages(); // Cargar imágenes iniciales
  }

  changeLanguage(lang: 'es' | 'en' | 'pt') {
    this.currentLanguage = lang;
    this.loadSounds(); // Recargar sonidos
    this.flagIcon = this.getFlagIcon(lang); // Actualizar bandera
  }

  getFlagIcon(lang: 'es' | 'en' | 'pt'): string {
    const flags = {
      'es': 'assets/img/es.png',
      'en': 'assets/img/en.png',
      'pt': 'assets/img/pt.png'
    };
    return flags[lang];
  }

  // Cambiar el tema y recargar sonidos e imágenes
  changeTheme(theme: 'colores' | 'numeros' | 'animales') {
    this.currentTheme = theme;
    this.loadSounds();
    this.loadImages();
    this.themeIcon = this.getThemeIcon(theme); // Actualizar ícono del tema
  }

  getThemeIcon(theme: 'colores' | 'numeros' | 'animales'): string {
    const icons = {
      'colores': 'color-palette-sharp',
      'numeros': '123',
      'animales': 'paw-sharp'
    };
    return icons[theme];
  }

  // Reproducir sonido basado en el botón presionado
  playSound(buttonIndex: number) {
    const sound = new Audio(this.sounds[buttonIndex]);
    sound.play();
  }
  
  logout() {
    this.authService.logout();
  }
}

