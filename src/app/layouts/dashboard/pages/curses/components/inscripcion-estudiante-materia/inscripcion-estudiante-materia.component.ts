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

  constructor(
    private userDataService: UserDataService,
    private curseDataService: CurseDataService,
    ) { }

  ngOnInit() {
    // Obtener la lista de cursos y estudiantes del servicio
    this.curseDataService.getCurses().subscribe((curses: Curse[]) => {
      // Este bloque de código se ejecutará cuando los datos estén disponibles
      this.cursos = curses;
    });
    this.userDataService.getUsuariosPorRol('estudiante').subscribe((estudiantes: Usuario[]) => {
      // Este bloque de código se ejecutará cuando los datos estén disponibles
      this.estudiantes = estudiantes;
    });
  }

  cancelar(){};
  asignarCurse(){};
}
  


