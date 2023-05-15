import { createAlarmClockButtons, clock, alarm } from './components/clock.js';
import countdown from './components/countdown.js';
import darkLightMode from './components/dark_mode.js';
import moveBall from './components/key_events.js';
import { createNavMenu, hamburgerMenuFunction } from './components/nav_menu.js';
import responsiveMedia from './components/responsive.js';
import scrollTop from './components/scroll_top.js';
import responsiveTester from './components/responsive_tester.js';
import userDeviceInfo from './components/deteccion_dispositivos.js';
import lostSignal from './components/check_connection.js';
import detectWebcam from './components/webcam.js';
import geolocalizacion from './components/geolocalization.js';
import {
  createCards,
  filtroDeBusqueda,
} from './components/filtro_de_busqueda.js';
import sortear from './components/sorteo.js';
import imgSlider from './components/responsive_slider.js';
import scrollSpy from './components/scrollSpy.js';
import smartVideo from './components/video_inteligente.js';
import validateFormInputs from './components/validate_form.js';
import narrador from './components/narrador.js';

document.addEventListener('DOMContentLoaded', () => {
  createNavMenu('section', 'nav');
  hamburgerMenuFunction('.hamburger', '.panel', '.menu a');
  createAlarmClockButtons('section1');
  clock('clock', '#habilitar-reloj', '#deshabilitar-reloj');
  alarm('../src/assets/a.mp3', '#activar-alarma', '#desactivar-alarma');
  countdown(
    'countdown',
    '2023, 5, 1 10:19',
    'Armo el portfolio y consigo empleo tech',
  );
  scrollTop('.top', '#section1');
  responsiveMedia(
    'youtube',
    '(min-width: 870px)',
    `<a href="https://player.vimeo.com/video/203658093?h=11ee46a9bb" target="_blank" rel="noopener">Ver video</a>`,
    `<iframe title="vimeo-player" src="https://player.vimeo.com/video/203658093?h=11ee46a9bb" width="640" height="360" frameborder="0"    allowfullscreen></iframe>`,
  );
  responsiveMedia(
    'gmaps',
    '(min-width: 870px)',
    `<a href="https://goo.gl/maps/kMeTaybQGfX2JQzr8" target="_blank" rel="noopener">Ver mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.77824461092!2d2.264633890832824!3d48.85893843528405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2zUGFyw61zLCBGcmFuY2lh!5e0!3m2!1ses-419!2sar!4v1681407670459!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  );

  responsiveTester('responsive-form');
  userDeviceInfo('user-device');
  // función apagada para que no me cargue la videocamara
  detectWebcam('webcam');
  geolocalizacion('location', 'map-link');
  createCards('.cards');
  filtroDeBusqueda('filter', '.card');
  sortear('.player', 'choose');
  imgSlider();
  scrollSpy();
  smartVideo();
  validateFormInputs();
});

document.addEventListener('keydown', (e) => {
  // función apagada para usar las teclas mientras tanto...
  moveBall(e, '.ball', '.stage');
});

darkLightMode(
  '.dark-light-button',
  'dark-mode',
  './src/assets/moon.svg',
  './src/assets/sun.svg',
);
lostSignal('.signal');
narrador();
