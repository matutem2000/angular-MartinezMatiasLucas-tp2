import { Component } from '@angular/core';
//import { CurseDataService } from '../../../../../../core/services/curse-data.service';
//import { UserDataService } from '../../../../../../core/services/user-data.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-asignacion-profesor-materia',
  templateUrl: './asignacion-profesor-materia.component.html',
  styleUrl: './asignacion-profesor-materia.component.scss'
})
export class AsignacionProfesorMateriaComponent {

   // Puedes agregar las listas de cursos y profesores según sea necesario
   cursos: string[] = ['Curso1', 'Curso2', 'Curso3'];
   profesores: string[] = ['Profesor1', 'Profesor2', 'Profesor3'];
 
   // Variables para almacenar la selección del usuario
   selectedCurso: string = '';
   selectedProfesor: string = '';
 
   constructor(public dialogRef: MatDialogRef<AsignacionProfesorMateriaComponent>) {}
 
   // Método para cerrar el diálogo y devolver la selección
   agregarCurse(): void {
    console.log('llego al metodo de agregar en el componente');
     if (this.selectedCurso && this.selectedProfesor) {
       this.dialogRef.close({ curso: this.selectedCurso, profesor: this.selectedProfesor });
     }
   }
 
   // Método para cerrar el diálogo sin agregar nada
   cancelar(): void {
     this.dialogRef.close();
   }
}
