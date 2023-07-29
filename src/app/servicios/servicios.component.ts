import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  servicios = [
    {
      nombre: 'Servicio de fisioterapia',
      imagen: 'img_fisiote.jpg',
      descripcion: 'Ofrecemos una alternativa terapéutica no farmacológica mediante una valoración inicial que nos permite diagnosticar, prevenir y tratar síntomas de múltiples dolencias, causadas por traumas, alteraciones músculo esqueléticas y/o neurológicas.',
      mostrarInfo: false
    },
    {
      nombre: 'Servicio de terapia natural',
      imagen: 'img_natural.jpg',
      descripcion: 'Este servicio incluye:\n\n- Masaje terapéutico.\n- Masaje de relajación.\n- Masaje de drenaje linfático.',
      mostrarInfo: false
    },
    {
      nombre: 'Servicio de ceragem',
      imagen: 'cerageem.jpg',
      descripcion: 'Este revolucionario avance permite revitalizar el cuerpo, alivia dolores musculares, de artritis, mejora la circulación, reduce el estrés a través de la digitopuntura, moxibustión (infrarrojo) y masaje.',
      mostrarInfo: false
    },
    {
      nombre: 'Servicio de acondicionamiento físico',
      imagen: 'img_acon_fisi.jpg',
      descripcion: 'Este programa busca fomentar la actividad física para mejorar la calidad de vida de los usuarios.',
      mostrarInfo: false
    },
    {
      nombre: 'Servicio de programa antiestres',
      imagen: 'img_antiestres.jpg',
      descripcion: 'Debido a las situaciones generadas de tensión a las que nos sometemos diariamente como: Enfermedad (fibromialgia, lumbalgia, cervicalgia, dorsalgia, lumbalgia, siendo estas las más comunes) muerte de familiares, divorcio, carga laboral extrema, entre otros, y teniendo en cuenta las consecuencias que genera este estado de tensión en el organismo se da la necesidad de generar espacios de relajación que permitan al ser humano mantener en equilibrio su estado de salud.',
      mostrarInfo: false
    },
    {
      nombre: 'Servicio de clínica de la columna',
      imagen: 'img_columna.jpg',
      descripcion: 'El programa ha sido creado con el fin de disminuir la incidencia de pacientes con dolor recurrente de espalda causado por patologías y alteraciones musculo esqueléticas, mediante la prevención y técnicas de rehabilitación que se complementan con el uso de equipos biomédicos (tracciones).',
      mostrarInfo: false
    },
    {
      nombre: 'Servicio de psicología',
      imagen: 'img_psicolo.jpg',
      descripcion: 'Brindamos el servicio de psicología basada en la ética profesional, dirigida a la comunidad en todos los procesos que vinculan el desarrollo y bienestar humano y social, promoviendo el mejoramiento de la calidad de vida y el fortalecimiento de habilidades y talentos para afrontar las dificultades cotidianas, superar episodios de crisis y malestar psicológico, además de problemáticas de convivencia y trastornos mentales que afectan el bienestar psicosocial de personas, parejas y familias.',
      mostrarInfo: false
    }
  ];

  toggleInfo(servicio: any): void {
    servicio.mostrarInfo = !servicio.mostrarInfo;
  }
}
