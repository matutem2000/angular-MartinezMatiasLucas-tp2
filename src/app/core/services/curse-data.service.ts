import { Injectable } from '@angular/core';
import { Curse } from '../../layouts/dashboard/pages/curses/models/curses.interfaces';
import { MatDialog } from '@angular/material/dialog';
import { LoadingService } from './loading.service';
import { BehaviorSubject, map, Observable, delay, of } from 'rxjs';
import { ModificarProfesorCursoComponent } from '../../layouts/dashboard/pages/curses/components/modificar-profesor-curso/modificar-profesor-curso.component';
import { ModificarCursoComponent } from '../../layouts/dashboard/pages/curses/components/modificar-curso/modificar-curso.component';
import { EliminarCursoComponent } from '../../layouts/dashboard/pages/curses/components/eliminar-curso/eliminar-curso.component';
import { CurseFormCrearComponent } from '../../layouts/dashboard/pages/curses/components/curse-form-crear/curse-form-crear.component';


let CURSES_DB:Curse[] = [
  { id: 1, 
    nombre: 'Introducción a la Programación', 
  },
  { id: 2, 
    nombre: 'Estructuras de Datos', 
   },
  { id: 3, 
    nombre: 'Desarrollo Web', 
  },
  
];


@Injectable({
  providedIn: 'root'
})
export class CurseDataService {
  private curseSubject: BehaviorSubject<Curse[]> = new BehaviorSubject<Curse[]>([]);
  curses$: Observable<Curse[]> = this.curseSubject.asObservable();


  constructor(public dialog: MatDialog, private loadingService: LoadingService){};

 
//obtener usuarios
getCurses() {
    return of (CURSES_DB).pipe(delay(3000));
}

//Guardar cursos
guardarCurso(curso: Curse): Observable<Curse[]> {
  const dialogRef = this.dialog.open(CurseFormCrearComponent, {
    data: { curso },
  });

  return dialogRef.afterClosed().pipe(
    map((cursoNuevo: Curse) => {
      if (cursoNuevo) {
        console.log('Curso existente:', cursoNuevo);
        // Modificar el curso en la base de datos
        
      }
      console.log('es un curso nuevo');
      return [...CURSES_DB];
    })
  );
  
} 

  modificarCurso(curso: Curse): Observable<Curse[]> {
    console.log('Curso recibido a modificar', curso);
    const dialogRef = this.dialog.open(ModificarCursoComponent, {
      data: { curso },
    });

    return dialogRef.afterClosed().pipe(
      map((cursoModificado: Curse) => {
        if (cursoModificado) {
          console.log('Datos del curso modificado:', cursoModificado);
          // Modificar el curso en la base de datos
          CURSES_DB = CURSES_DB.map((c) =>
            c.id === cursoModificado.id ? { ...c, ...cursoModificado } : c
          );
          console.log('El nuevo array de cursos con la modificación', CURSES_DB);
        }
        return [...CURSES_DB];
      })
    );
    
  }

  // Eliminar cuso
eliminarCurso(curso: Curse): Observable<Curse[]> {
  //console.log('eliminar en user-data.service- apreté botón');
 const dialogRef = this.dialog.open(EliminarCursoComponent, {
   data: { curso },
 });
 
 return dialogRef.afterClosed().pipe(
   map((eliminado: boolean) => {
     if (eliminado) {
       // Eliminar el curso del dataSource
       CURSES_DB = CURSES_DB.filter(u => u.id !== curso.id);
     }
     return [...CURSES_DB];
   })
 );

}


}

