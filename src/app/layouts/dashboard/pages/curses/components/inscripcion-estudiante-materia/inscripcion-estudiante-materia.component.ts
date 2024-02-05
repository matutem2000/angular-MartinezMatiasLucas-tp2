import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../../../../../core/services/user-data.service';
import { Usuario } from '../../../usuarios/models/usuarios.interface';
import { Curse } from '../../models/curses.interfaces';
import { CurseDataService } from '../../../../../../core/services/curse-data.service';


@Component({
  selector: 'app-inscripcion-estudiante-materia',
  templateUrl: './inscripcion-estudiante-materia.component.html',
  styleUrl: './inscripcion-estudiante-materia.component.scss'
})
export class InscripcionEstudianteMateriaComponent implements OnInit {
  cursos: Curse[] = [];  
  estudiantes: Usuario[] = [];  
  selectedCurso: string = '';
  selectedEstudiante: Usuario | null = null;
  asignaciones: any[] = [];

  constructor(
    private userDataService: UserDataService,
    private curseDataService: CurseDataService,
    ) { }

  ngOnInit() {
    // Obtener la lista de cursos y estudiantes del servicio
    this.curseDataService.getCurses().subscribe((curses: Curse[]) => {
      this.cursos = curses;
    });
    this.userDataService.getUsuariosPorRol('estudiante').subscribe((estudiantes: Usuario[]) => {
      this.estudiantes = estudiantes;
    });
  }

  
  asignarCurse(){
    if (this.selectedCurso && this.selectedEstudiante) {
      // Verifica si ya existe una asignación para este curso y estudiante
      const existente = this.asignaciones.find(assignment =>
        assignment.curso === this.selectedCurso && assignment.estudiante === this.selectedEstudiante
      );

      // Si no existe, agrega la asignación al array
      if (!existente) {
        this.asignaciones.push({
          curso: this.selectedCurso,
          estudiante: this.selectedEstudiante
        });
      }
      console.log(this.asignaciones);
  };
}
  
}

