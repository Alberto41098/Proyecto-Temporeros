import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../../servicios/ofertas.service';
import { TrabajadoresService } from '../../servicios/trabajadores.service';
@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss']
})
export class OfertasComponent implements OnInit {
  init = false;
  ofertas: Array<any>;
  control: number;
  loading = false;
  yo = [{
    id_oferta: 1,
    titulo: '1',
    fecha_inicio: '2020-10-10',
    vacantes: 1000,
    municipio_id: 6842,
    recogida_id: 1,
    empresa_id: 1,
    empresa: 'empresa jaja',
    municipio: 'madridejos'
  },
  {
    id_oferta: 1,
    titulo: '2',
    fecha_inicio: '2020-10-10',
    vacantes: 1000,
    municipio_id: 6842,
    recogida_id: 1,
    empresa_id: 1,
    empresa: 'empresa lol',
    municipio: 'Madridejos'
    },
  {
    id_oferta: 1,
    titulo: '3',
    fecha_inicio: '2020-10-10',
    vacantes: 1000,
    municipio_id: 6842,
    recogida_id: 1,
    empresa_id: 1,
    empresa: 'empresa lol',
    municipio: 'Madridejos'
    },
  {
    id_oferta: 1,
    titulo: '4',
    fecha_inicio: '2020-10-10',
    vacantes: 1000,
    municipio_id: 6842,
    recogida_id: 1,
    empresa_id: 1,
    empresa: 'empresa lol',
    municipio: 'Madridejos'
    },
  {
    id_oferta: 1,
    titulo: '5',
    fecha_inicio: '2020-10-10',
    vacantes: 1000,
    municipio_id: 6842,
    recogida_id: 1,
    empresa_id: 1,
    empresa: 'empresa lol',
    municipio: 'Madridejos'
    },
  {
    id_oferta: 1,
    titulo: '6',
    fecha_inicio: '2020-10-10',
    vacantes: 1000,
    municipio_id: 6842,
    recogida_id: 1,
    empresa_id: 1,
    empresa: 'empresa lol',
    municipio: 'Madridejos'
    },
  {
    id_oferta: 1,
    titulo: '7',
    fecha_inicio: '2020-10-10',
    vacantes: 1000,
    municipio_id: 6842,
    recogida_id: 1,
    empresa_id: 1,
    empresa: 'empresa lol',
    municipio: 'Madridejos'
    },
  {
    id_oferta: 1,
    titulo: '8',
    fecha_inicio: '2020-10-10',
    vacantes: 1000,
    municipio_id: 6842,
    recogida_id: 1,
    empresa_id: 1,
    empresa: 'empresa lol',
    municipio: 'Madridejos'
    },
  {
    id_oferta: 1,
    titulo: '9',
    fecha_inicio: '2020-10-10',
    vacantes: 1000,
    municipio_id: 6842,
    recogida_id: 1,
    empresa_id: 1,
    empresa: 'empresa lol',
    municipio: 'Madridejos'
    },
    {
    id_oferta: 1,
    titulo: '10',
    fecha_inicio: '2020-10-10',
    vacantes: 1000,
    municipio_id: 6842,
    recogida_id: 1,
    empresa_id: 1,
    empresa: 'empresa lol',
    municipio: 'Madridejos'
    },
  {
    id_oferta: 1,
    titulo: '11',
    fecha_inicio: '2020-10-10',
    vacantes: 1000,
    municipio_id: 6842,
    recogida_id: 1,
    empresa_id: 1,
    empresa: 'empresa lol',
    municipio: 'Madridejos'
    },
    {
      id_oferta: 1,
    titulo: '12',
    fecha_inicio: '2020-10-10',
    vacantes: 1000,
    municipio_id: 6842,
    recogida_id: 1,
    empresa_id: 1,
    empresa: 'empresa jaja',
    municipio: 'madridejos'
  },
  {
    id_oferta: 1,
    titulo: '13',
    fecha_inicio: '2020-10-10',
    vacantes: 1000,
    municipio_id: 6842,
    recogida_id: 1,
    empresa_id: 1,
    empresa: 'empresa lol',
    municipio: 'Madridejos'
    },
  {
    id_oferta: 1,
    titulo: '14',
    fecha_inicio: '2020-10-10',
    vacantes: 1000,
    municipio_id: 6842,
    recogida_id: 1,
    empresa_id: 1,
    empresa: 'empresa lol',
    municipio: 'Madridejos'
    },
  {
    id_oferta: 1,
    titulo: '15',
    fecha_inicio: '2020-10-10',
    vacantes: 1000,
    municipio_id: 6842,
    recogida_id: 1,
    empresa_id: 1,
    empresa: 'empresa lol',
    municipio: 'Madridejos'
    },
  {
    id_oferta: 1,
    titulo: '16',
    fecha_inicio: '2020-10-10',
    vacantes: 1000,
    municipio_id: 6842,
    recogida_id: 1,
    empresa_id: 1,
    empresa: 'empresa lol',
    municipio: 'Madridejos'
    },
  {
    id_oferta: 1,
    titulo: '17',
    fecha_inicio: '2020-10-10',
    vacantes: 1000,
    municipio_id: 6842,
    recogida_id: 1,
    empresa_id: 1,
    empresa: 'empresa lol',
    municipio: 'Madridejos'
    },
  {
    id_oferta: 1,
    titulo: '18',
    fecha_inicio: '2020-10-10',
    vacantes: 1000,
    municipio_id: 6842,
    recogida_id: 1,
    empresa_id: 1,
    empresa: 'empresa lol',
    municipio: 'Madridejos'
    },
  {
    id_oferta: 1,
    titulo: '19',
    fecha_inicio: '2020-10-10',
    vacantes: 1000,
    municipio_id: 6842,
    recogida_id: 1,
    empresa_id: 1,
    empresa: 'empresa lol',
    municipio: 'Madridejos'
    },
  {
    id_oferta: 1,
    titulo: '20',
    fecha_inicio: '2020-10-10',
    vacantes: 1000,
    municipio_id: 6842,
    recogida_id: 1,
    empresa_id: 1,
    empresa: 'empresa lol',
    municipio: 'Madridejos'
    },
    {
    id_oferta: 1,
    titulo: '21',
    fecha_inicio: '2020-10-10',
    vacantes: 1000,
    municipio_id: 6842,
    recogida_id: 1,
    empresa_id: 1,
    empresa: 'empresa lol',
    municipio: 'Madridejos'
    },
  {
    id_oferta: 1,
    titulo: '22',
    fecha_inicio: '2020-10-10',
    vacantes: 1000,
    municipio_id: 6842,
    recogida_id: 1,
    empresa_id: 1,
    empresa: 'empresa lol',
    municipio: 'Madridejos'
    }
  ];
  mostrar: Array<any>;
  private finishPage = 15;
  private actualPage: number;
  constructor(private ofertaService: OfertasService,
              private trabajadoresService: TrabajadoresService) {
    this.actualPage = 1;
    this.mostrar = [];
  }

  ngOnInit() {
    this.init = true;
    setTimeout(() => {
      this.ofertas = this.ofertaService.getOfertas();
      this.add10lines();
      console.log(this.ofertas);
      this.init = false;
    }, 1000);
  }
   onScroll() {
    if ((this.actualPage < this.finishPage) && (this.ofertas.length !== this.mostrar.length)) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.add10lines();
        this.actualPage ++;
      }, 500);
    }
  }
  add10lines() {
      let numero: number;
      if (this.ofertas.length - this.mostrar.length >= 15) {
        numero = 15;
      } else {
        numero = (this.ofertas.length - this.mostrar.length);
      }
      this.control = this.mostrar.length;
      for (let i = 0; i < numero; i++) {
        this.mostrar.push(this.ofertas[this.control + i]);
      }
  }
}
