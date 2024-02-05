import { Component } from '@angular/core';
import { Curse } from './models/curses.interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { LoadingService } from '../../../../core/services/loading.service';
import { CurseDataService } from '../../../../core/services/curse-data.service';
import { MatDialog } from '@angular/material/dialog';
import { InscripcionEstudianteMateriaComponent } from './components/inscripcion-estudiante-materia/inscripcion-estudiante-materia.component';
import { CurseFormCrearComponent } from './components/curse-form-crear/curse-form-crear.component';


@Component({
  selector: 'app-curses',
  templateUrl: './curses.component.html',
  styleUrl: './curses.component.scss'
})
export class CursesComponent {

  displayedColumns: string[] = ['id', 'nombreCurso', 'profesor', 'acciones'];
  dataSourceCurse: Curse[] = [];

    constructor(public dialog: MatDialog, private curseDataService: CurseDataService, private loadingService: LoadingService){}

  //Listar cursos
  ngOnInit(): void {
    //this.loadingService.setIsLoading(true);
    this.curseDataService.getCurses().subscribe({
      next: (cursos) =>{
        this.dataSourceCurse=cursos;
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      }
    });
  }

  //Agregar cursos
  agregarNuevoCurse(){
    const dialogRef = this.dialog.open(CurseFormCrearComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Aquí puedes manejar el resultado si es necesario (result.curso y result.profesor)
        // Puedes agregar lógica para agregar un nuevo curso según los datos seleccionados
      }
    });
  };
 
  //Eliminar usuario
  eliminarCurse(curse: Curse): void {
    /* this.loadingService.setIsLoading(true);
    this.userDataService
    .eliminarUsuario({...usuario}).subscribe({
      next: (usuarios) =>{
        //console.log('Usuarios actualizados:', usuarios);
        this.dataSource=[...usuarios];
      },
      complete:() =>{
        this.loadingService.setIsLoading(false);
      }
    }); */
}


  //MOdificar usuario
  modificarCurse(curse: Curse): void {
    /* this.loadingService.setIsLoading(true);
     this.userDataService
    .modificarUsuario({...usuario}).subscribe({
      next: (usuarios) =>{
        //console.log('Usuarios actualizados:', usuarios);
        this.dataSource=[...usuarios];
      },
      complete:() =>{
        this.loadingService.setIsLoading(false);
      }
    });  */
  }


  /*constructor(public dialog: MatDialog, private userDataService: UserDataService, private loadingService: LoadingService){}

  //Listar usuarios
  ngOnInit(): void {
    //this.loadingService.setIsLoading(true);
    this.userDataService.getUsuarios().subscribe({
      next: (usuario) =>{
        this.dataSource=usuario;
      },
      complete: () => {
        console.log('entro a complete');
        this.loadingService.setIsLoading(false);
      }
    });
  }

  //Crear usuario
  onUserSubmitted(ev: Usuario): void {
    this.loadingService.setIsLoading(true);
    this.userDataService
    .createUser({...ev}).subscribe({
      next: (usuarios) =>{
        this.dataSource=[...usuarios];
      },
      complete:() =>{
        this.loadingService.setIsLoading(false);
      }
    })
  }
  
  //Eliminar usuario
  eliminarUsuario(usuario: Usuario): void {
    this.loadingService.setIsLoading(true);
    this.userDataService
    .eliminarUsuario({...usuario}).subscribe({
      next: (usuarios) =>{
        //console.log('Usuarios actualizados:', usuarios);
        this.dataSource=[...usuarios];
      },
      complete:() =>{
        this.loadingService.setIsLoading(false);
      }
    });
}


  //MOdificar usuario
  modificarUsuario(usuario: Usuario): void {
    this.loadingService.setIsLoading(true);
     this.userDataService
    .modificarUsuario({...usuario}).subscribe({
      next: (usuarios) =>{
        //console.log('Usuarios actualizados:', usuarios);
        this.dataSource=[...usuarios];
      },
      complete:() =>{
        this.loadingService.setIsLoading(false);
      }
    }); 
  }*/
  
  


}
