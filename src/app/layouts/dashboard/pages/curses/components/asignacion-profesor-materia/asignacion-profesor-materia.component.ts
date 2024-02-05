import { Component, OnInit, Input } from '@angular/core';
import { CurseDataService } from '../../../../../../core/services/curse-data.service';
import { UserDataService } from '../../../../../../core/services/user-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Usuario } from '../../../usuarios/models/usuarios.interface';
import { Curse } from '../../models/curses.interfaces';
import { MatDialog } from '@angular/material/dialog';
import { AsignacionProfesor } from '../../models/asignacionProfesor.interface';
import { ModificarProfesorCursoComponent } from '../modificar-profesor-curso/modificar-profesor-curso.component';

@Component({
  selector: 'app-asignacion-profesor-materia',
  templateUrl: './asignacion-profesor-materia.component.html',
  styleUrl: './asignacion-profesor-materia.component.scss'
})
export class AsignacionProfesorMateriaComponent implements OnInit {

  cursos: Curse[] = [];  
  profesores: Usuario[] = [];  
  selectedCurso: Curse| null = null;
  selectedProfesor: Usuario | null = null;
  asignacionesProfesor: AsignacionProfesor[] = [
    {idAsignado: 1,
      nombreProfesor:'Mickey',
      apellidoProfesor:'Mouse',
      nombreCurso:'Angular'
    },
    {idAsignado: 2,
      nombreProfesor:'Pato',
      apellidoProfesor:'Donald',
      nombreCurso:'JS'
    },
    {idAsignado: 3,
      nombreProfesor:'Tío',
      apellidoProfesor:'Rico',
      nombreCurso:'NestJs'
    },

  ];
  displayedColumns: string[] = ['id','nombreCurso', 'profesor', 'acciones'];
  dataSource = this.asignacionesProfesor;
  
   constructor(
    private dialog: MatDialog,
    private userDataService: UserDataService,
    private curseDataService: CurseDataService,
    ) {

    }



    ngOnInit() {
      // Obtener la lista de cursos y profesores del servicio
      this.curseDataService.getCurses().subscribe((curses: Curse[]) => {
        this.cursos = curses;
      });
      this.userDataService.getUsuariosPorRol('profesor').subscribe((profesores: Usuario[]) => {
        this.profesores = profesores;
      });
    }
 
   // Método para cerrar el diálogo y devolver la selección
   

asignarCurse() {
  if (this.selectedCurso && this.selectedProfesor) {
      let nuevaAsignacion = {
        idAsignado: this.asignacionesProfesor.length + 1,
        nombreProfesor: this.selectedProfesor.nombre,
        apellidoProfesor: this.selectedProfesor.apellido,
        nombreCurso: this.selectedCurso.nombre
      };

      this.asignacionesProfesor.push(nuevaAsignacion);
    
    console.log('Deseo mostrar el nuevo array de objetos',this.asignacionesProfesor);

    this.mostrarAsignaciones();
  }
}


// Método para mostrar las asignaciones de cursos
mostrarAsignaciones() {
 // console.log('Listado de cursos asignados:');
  this.asignacionesProfesor.forEach(asignacion => {
  });
}

modificarCurse(element: string[]): void {
  const dialogRef = this.dialog.open(ModificarProfesorCursoComponent, {
    width: '400px', 
    data: { curso: element } 
  });
}
eliminarCurse(element:string[]): void{
  const dialogRef = this.dialog.open(ModificarProfesorCursoComponent, {
    width: '400px', 
    data: { curso: element } 
  });};
}
