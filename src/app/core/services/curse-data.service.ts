import { Injectable } from '@angular/core';
import { Curse } from '../../layouts/dashboard/pages/curses/models/curses.interfaces';
import { MatDialog } from '@angular/material/dialog';
import { LoadingService } from './loading.service';
import { BehaviorSubject, Observable, delay, of } from 'rxjs';


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
guardarCurso(curso: Curse) {
  this.loadingService.setIsLoading(true);

  // Simula una operación asíncrona (puedes omitir esto si la adición del curso es instantánea)
  setTimeout(() => {
    CURSES_DB.push(curso);

    // Después de agregar el curso, detén el indicador de carga
    this.loadingService.setIsLoading(false);

    // Notifica a Angular sobre el cambio en el array
    this.curseSubject.next([...CURSES_DB]);
  }, 3000);
  }

}
