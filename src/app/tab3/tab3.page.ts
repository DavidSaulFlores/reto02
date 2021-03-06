import { Component } from '@angular/core';
import { Estudiante } from '../models/estudiante';
import { EstudianteService } from '../services/estudiante.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public students: Estudiante[];

  constructor(private service: EstudianteService) {
    this.service.getStudent().subscribe(data => {
      this.students = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Estudiante
        } 
      })
    });
  }

}
