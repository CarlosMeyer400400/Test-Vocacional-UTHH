import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  imports: [FormsModule]
})
export class TestComponent {


  
  respuestas = {
    p1: '', p2: '', p3: '', p4: '', p5: '', p6: '', p7: '', p8: '', p9: '',
    p10: '', p11: '', p12: '', p13: '', p14: '', p15: '', p16: '', p17: '', p18: '', p19: '',
    p20: '', p21: '', p22: '', p23: '', p24: '', p25: '', p26: '', p27: '', p28: '', p29: '',
  };

  constructor(private router: Router) {}

  calcularResultado() {
    const categorias = {
      tecnologiasInformacion: 0,
      mecanicaIngenieria: 0,
      administracionNegocios: 0,
      cienciasBiologicas: 0,
      otros: 0,
    };

    // Evaluar las respuestas y aumentar los contadores en las categorías
    if (this.respuestas.p1 === 'construccion') categorias.mecanicaIngenieria++;
    if (this.respuestas.p2 === 'ti') categorias.tecnologiasInformacion++;
    if (this.respuestas.p3 === 'automotriz') categorias.mecanicaIngenieria++;
    if (this.respuestas.p4 === 'administracion') categorias.administracionNegocios++;
    if (this.respuestas.p5 === 'agrobiotecnologia') categorias.cienciasBiologicas++;
    if (this.respuestas.p6 === 'procesos_alimentarios') categorias.cienciasBiologicas++;
    if (this.respuestas.p7 === 'gastronomia') categorias.administracionNegocios++;
    if (this.respuestas.p8 === 'desarrollo_negocios') categorias.administracionNegocios++;
    if (this.respuestas.p9 === 'mecanica_industrial') categorias.mecanicaIngenieria++;
    if (this.respuestas.p10 === 'administracion') categorias.administracionNegocios++;
    if (this.respuestas.p11 === 'mecatronica') categorias.mecanicaIngenieria++;
    if (this.respuestas.p12 === 'ti') categorias.tecnologiasInformacion++;
    if (this.respuestas.p13 === 'ti') categorias.tecnologiasInformacion++;
    if (this.respuestas.p14 === 'contaduria') categorias.administracionNegocios++;
    if (this.respuestas.p15 === 'procesos_industriales') categorias.mecanicaIngenieria++;
    if (this.respuestas.p16 === 'agrobiotecnologia') categorias.cienciasBiologicas++;
    if (this.respuestas.p17 === 'mecatronica') categorias.mecanicaIngenieria++;
    if (this.respuestas.p18 === 'desarrollo_negocios') categorias.administracionNegocios++;
    if (this.respuestas.p19 === 'mecanica_industrial') categorias.mecanicaIngenieria++;
    if (this.respuestas.p20 === 'mecatronica') categorias.mecanicaIngenieria++;
    if (this.respuestas.p21 === 'matematicas') categorias.tecnologiasInformacion++;
    if (this.respuestas.p22 === 'creatividad') categorias.administracionNegocios++;
    if (this.respuestas.p23 === 'tecnologia') categorias.tecnologiasInformacion++;
    if (this.respuestas.p24 === 'automotriz') categorias.mecanicaIngenieria++;
    if (this.respuestas.p25 === 'trabajo_equipo') categorias.administracionNegocios++;
    if (this.respuestas.p26 === 'problemas_complejos') categorias.mecanicaIngenieria++;
    if (this.respuestas.p27 === 'biologia') categorias.cienciasBiologicas++;
    if (this.respuestas.p28 === 'administracion') categorias.administracionNegocios++;
    if (this.respuestas.p29 === 'trabajo_campo') categorias.mecanicaIngenieria++;

    // Determinar cuál categoría tiene más respuestas afirmativas
    let carrera = 'Carrera no definida';
    
    // Aquí se asegura de que maxCategory sea una clave válida dentro del objeto categorias
    const maxCategory = Object.keys(categorias).reduce((a, b) => categorias[a as keyof typeof categorias] > categorias[b as keyof typeof categorias] ? a : b);

    // Asignar la carrera según la categoría
    switch (maxCategory) {
      case 'tecnologiasInformacion':
        carrera = 'TSU. EN TECNOLOGÍAS DE LA INFORMACIÓN ÁREA DESARROLLO DE SOFTWARE MULTIPLATAFORMA';
        break;
      case 'mecanicaIngenieria':
        carrera = 'TSU. MECÁNICA ÁREA AUTOMOTRIZ';
        break;
      case 'administracionNegocios':
        carrera = 'TSU. ADMINISTRACIÓN ÁREA FORMULACIÓN Y EVALUACIÓN DE PROYECTOS';
        break;
      case 'cienciasBiologicas':
        carrera = 'TSU. AGROBIOTECNOLOGÍA ÁREA VEGETAL';
        break;
      default:
        carrera = 'Carrera no definida';
    }

    // Redirigir a la página de resultados
    this.router.navigate(['/resultado'], { queryParams: { carrera } });
  }
}
