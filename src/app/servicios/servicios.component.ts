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
      imagen: 'https://blogs.unitec.mx/hubfs/Imported_Blog_Media/tienes-vocacion-para-estudiar-fisioterapia-4-compressor-Dec-17-2022-09-08-00-6882-PM.jpg',
      descripcion: 'Ofrecemos una alternativa terapéutica no farmacológica mediante una valoración inicial que nos permite diagnosticar, prevenir y tratar síntomas de múltiples dolencias, causadas por traumas, alteraciones músculo esqueléticas y/o neurológicas.',
      mostrarInfo: false
    },
    {
      nombre: 'Servicio de terapia natural',
      imagen: 'https://www.vallemorilla.com/wp-content/uploads/2022/09/masajes-VALLE-MORILLA.jpg',
      descripcion: 'Este servicio incluye:\n\n- Masaje terapéutico.\n- Masaje de relajación.\n- Masaje de drenaje linfático.',
      mostrarInfo: false
    },
    {
      nombre: 'Servicio de ceragem',
      imagen: 'https://i.pinimg.com/originals/e7/d7/40/e7d7400d0049cf6c6301e746d7e76f05.jpg',
      descripcion: 'Este revolucionario avance permite revitalizar el cuerpo, alivia dolores musculares, de artritis, mejora la circulación, reduce el estrés a través de la digitopuntura, moxibustión (infrarrojo) y masaje.',
      mostrarInfo: false
    },
    {
      nombre: 'Servicio de acondicionamiento físico',
      imagen: 'https://img.freepik.com/foto-gratis/paciente-haciendo-rehabilitacion-fisica-ayudado-terapeutas_23-2149227823.jpg?w=996&t=st=1693848835~exp=1693849435~hmac=357ac11d1419a2798c37138e04d8539b50b2e2a5916c7652fef48dd5f3840b1a',
      descripcion: 'Este programa busca fomentar la actividad física para mejorar la calidad de vida de los usuarios.',
      mostrarInfo: false
    },
    {
      nombre: 'Servicio de programa antiestres',
      imagen: 'https://www.esan.edu.pe/images/blog/2021/05/26/1500x844-como-afecta-estres-laboral-nivel-emp.jpg',
      descripcion: 'Debido a las situaciones generadas de tensión a las que nos sometemos diariamente como: Enfermedad (fibromialgia, lumbalgia, cervicalgia, dorsalgia, lumbalgia, siendo estas las más comunes) muerte de familiares, divorcio, carga laboral extrema, entre otros, y teniendo en cuenta las consecuencias que genera este estado de tensión en el organismo se da la necesidad de generar espacios de relajación que permitan al ser humano mantener en equilibrio su estado de salud.',
      mostrarInfo: false
    },
    {
      nombre: 'Servicio de clínica de la columna',
      imagen: 'https://www.jprehab.com/assets/uploads/ec_products/triton-dts-con-camilla-6m-traccion-cervical-y-lumbar-chattanooga1.jpg',
      descripcion: 'El programa ha sido creado con el fin de disminuir la incidencia de pacientes con dolor recurrente de espalda causado por patologías y alteraciones musculo esqueléticas, mediante la prevención y técnicas de rehabilitación que se complementan con el uso de equipos biomédicos (tracciones).',
      mostrarInfo: false
    },
    {
      nombre: 'Servicio de psicología',
      imagen: 'https://www.unisanitas.edu.co/documents/304576303/304906246/24_Especializaci%C3%B3n+en+Psicolog%C3%ADa+Cl%C3%ADnica-min.jpg/e40bd2fc-cdc9-8381-7adf-03bd9683971d?t=1628121375742',
      descripcion: 'Brindamos el servicio de psicología basada en la ética profesional, dirigida a la comunidad en todos los procesos que vinculan el desarrollo y bienestar humano y social, promoviendo el mejoramiento de la calidad de vida y el fortalecimiento de habilidades y talentos para afrontar las dificultades cotidianas, superar episodios de crisis y malestar psicológico, además de problemáticas de convivencia y trastornos mentales que afectan el bienestar psicosocial de personas, parejas y familias.',
      mostrarInfo: false
    }
  ];

  toggleInfo(servicio: any): void {
    servicio.mostrarInfo = !servicio.mostrarInfo;
  }
}
