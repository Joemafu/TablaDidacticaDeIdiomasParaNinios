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

  
  // Cargar sonidos de acuerdo al idioma y tema
  loadSounds() {
    const allSounds = {
      'es': {
        'colores': ['assets/sounds/es/colores1.mp3', 'assets/sounds/es/colores2.mp3', 'assets/sounds/es/colores3.mp3', 'assets/sounds/es/colores4.mp3', 'assets/sounds/es/colores5.mp3', 'assets/sounds/es/colores6.mp3'],
        'numeros': ['assets/sounds/es/numeros1.mp3', 'assets/sounds/es/numeros2.mp3', 'assets/sounds/es/numeros3.mp3', 'assets/sounds/es/numeros4.mp3', 'assets/sounds/es/numeros5.mp3', 'assets/sounds/es/numeros6.mp3'],
        'animales': ['assets/sounds/es/animales1.mp3', 'assets/sounds/es/animales2.mp3', 'assets/sounds/es/animales3.mp3', 'assets/sounds/es/animales4.mp3', 'assets/sounds/es/animales5.mp3', 'assets/sounds/es/animales6.mp3']
      },
      'en': {
        'colores': ['assets/sounds/en/colores1.mp3', 'assets/sounds/en/colores2.mp3', 'assets/sounds/en/colores3.mp3', 'assets/sounds/en/colores4.mp3', 'assets/sounds/en/colores5.mp3', 'assets/sounds/en/colores6.mp3'],
        'numeros': ['assets/sounds/en/numeros1.mp3', 'assets/sounds/en/numeros2.mp3', 'assets/sounds/en/numeros3.mp3', 'assets/sounds/en/numeros4.mp3', 'assets/sounds/en/numeros5.mp3', 'assets/sounds/en/numeros6.mp3'],
        'animales': ['assets/sounds/en/animales1.mp3', 'assets/sounds/en/animales2.mp3', 'assets/sounds/en/animales3.mp3', 'assets/sounds/en/animales4.mp3', 'assets/sounds/en/animales5.mp3', 'assets/sounds/en/animales6.mp3']
      },
      'pt': {
        'colores': ['assets/sounds/pt/colores1.mp3', 'assets/sounds/pt/colores2.mp3', 'assets/sounds/pt/colores3.mp3', 'assets/sounds/pt/colores4.mp3', 'assets/sounds/pt/colores5.mp3', 'assets/sounds/pt/colores6.mp3'],
        'numeros': ['assets/sounds/pt/numeros1.mp3', 'assets/sounds/pt/numeros2.mp3', 'assets/sounds/pt/numeros3.mp3', 'assets/sounds/pt/numeros4.mp3', 'assets/sounds/pt/numeros5.mp3', 'assets/sounds/pt/numeros6.mp3'],
        'animales': ['assets/sounds/pt/animales1.mp3', 'assets/sounds/pt/animales2.mp3', 'assets/sounds/pt/animales3.mp3', 'assets/sounds/pt/animales4.mp3', 'assets/sounds/pt/animales5.mp3', 'assets/sounds/pt/animales6.mp3']
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
    this.loadSounds();
  }

  // Cambiar el idioma y recargar sonidos
  changeLanguage(lang: 'es' | 'en' | 'pt') {
    this.currentLanguage = lang;
    this.loadSounds(); // Actualiza los sonidos según el idioma
    console.log('Idioma cambiado a:', lang);
  }

  // Cambiar el tema y recargar sonidos e imágenes
  changeTheme(theme: 'colores' | 'numeros' | 'animales') {
    this.currentTheme = theme;
    this.loadSounds(); // Recargar los sonidos del nuevo tema
    this.loadImages(); // Recargar las imágenes del nuevo tema
    console.log('Tema cambiado a:', theme);
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