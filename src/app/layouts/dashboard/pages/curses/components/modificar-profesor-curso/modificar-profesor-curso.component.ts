import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from '../../../usuarios/models/usuarios.interface';
import { AsignacionProfesor } from '../../models/asignacionProfesor.interface';
import { UserDataService } from '../../../../../../core/services/user-data.service';
import { CurseDataService } from '../../../../../../core/services/curse-data.service';
import { Observable } from 'rxjs';
import { Curse } from '../../models/curses.interfaces';


@Component({
  selector: 'app-modificar-profesor-curso',
  templateUrl: './modificar-profesor-curso.component.html',
  styleUrl: './modificar-profesor-curso.component.scss'
})

export class ModificarProfesorCursoComponent {
  cursos: Curse[] = [];  
  profesores: Usuario[] = []; 
  profesorCursoFormModif: FormGroup;

    constructor(
      private curseDataService:CurseDataService,
      private userDataService:UserDataService,
      public dialogRef: MatDialogRef<ModificarProfesorCursoComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { usuario: Usuario, curso: Curse },
      private fb: FormBuilder){
      this.profesorCursoFormModif=this.fb.group({
        idAsignado: this.fb.control(''),
        nombreProfesor: this.fb.control('', Validators.required),
        apellidoProfesor: this.fb.control('', Validators.required),
        nombreCurso: this.fb.control('', Validators.required),
      });
    }

    ngOnInit() {
      // Cargar datos del usuario en el formulario al inicializar el componente
      this.obtenerProfesores();
      this.obtenerCursos();
      this.cargarDatosProfesorCurso();
    }

    obtenerProfesores(): Observable<Usuario[]> {
      return this.userDataService.getUsuariosPorRol('profesor');
    }
    obtenerCursos(){};

    onSubmit(): void {
      if (this.profesorCursoFormModif.valid) {
        const profesorCursoModificado: AsignacionProfesor = this.profesorCursoFormModif.value;
        this.dialogRef.close(profesorCursoModificado);
      }
    }

    cargarDatosProfesorCurso() {
      // Patch los valores del usuario en el formulario
      this.profesorCursoFormModif.patchValue({
        idAsignado: this.data.usuario.id,
        nombreProfesor: this.data.usuario.nombre,
        apellidoProfesor: this.data.usuario.apellido,
        nombreCurso: this.data.curso.nombre
      });
    }
    

    /* ngOnInit() {
      // Cargar datos del usuario en el formulario al inicializar el componente
      this.cargarDatosUsuario();
    }
  
    cargarDatosUsuario() {
      // Patch los valores del usuario en el formulario
      this.profesorCursoFormModif.patchValue({
        id: this.data.usuario.id,
        nombre: this.data.usuario.nombre,
        apellido: this.data.usuario.apellido,
        email: this.data.usuario.email,
        password: this.data.usuario.password,
        rol: this.data.usuario.rol
      });
    }
  
  
     onSubmit(): void {
      if (this.profesorCursoFormModif.valid) {
        const usuarioModificado: Usuario = this.profesorCursoFormModif.value;
        console.log("Usuario modificado:", usuarioModificado);
        this.dialogRef.close(usuarioModificado);
      }
    }
    

// 
  cerrarModal() {
    this.dialogRef.close(); // Cierra el diálogo
  } */



}
