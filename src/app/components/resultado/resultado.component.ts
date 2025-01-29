import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  carrera: string = '';
  carreraImagen: string = ''; // La URL de la imagen de la carrera


   // Mapa de carreras y sus imágenes
   carreras = {
    'TSU. EN TECNOLOGÍAS DE LA INFORMACIÓN ÁREA DESARROLLO DE SOFTWARE MULTIPLATAFORMA': '/src/assets/TECNOLOGÍAS.png',
    'TSU. MECÁNICA ÁREA AUTOMOTRIZ': '/src/assets/MECÁNICA.png',
    'TSU. CONTADURÍA': '/src/assets/CONTADURÍA.png',
    'TSU. AGROBIOTECNOLOGÍA ÁREA VEGETAL': '/src/assets/AGROBIOTECNOLOGÍA.png',
    'TSU. CONSTRUCCIÓN':'/src/assets/CONSTRUCCIÓN.png',
    'TSU. ADMINISTRACIÓN ÁREA FORMULACIÓN Y EVALUACIÓN DE PROYECTOS': '/src/assets/EMPRENDIMIENTO.png',
    'TSU. PROCESOS ALIMENTARIOS':'/src/assets/PROCESOS.png',
    'TSU. DESARROLLO DE NEGOCIOS ÁREA MERCADOTECNIA':'/src/assets/MERCADOTECNIA.png',
    'TSU. GASTRONOMÍA':'/src/assets/GASTRONOMÍA.png',
    'TSU. MECATRÓNICA ÁREA AUTOMATIZACIÓN':'/src/assets/MECATRÓNICA.png',
    'Carrera no definida': '/src/assets/nodefi.jpeg',
  };


  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.carrera = params['carrera'] || 'Sin definir';
    });
  }
}
