import { Component, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Curse } from '../../models/curses.interfaces';

@Component({
  selector: 'app-eliminar-curso',
  templateUrl: './eliminar-curso.component.html',
  styleUrl: './eliminar-curso.component.scss'
})
export class EliminarCursoComponent {
  cursoFormEliminar: FormGroup;
  cursoEliminado = new EventEmitter<boolean>();  // Emitir evento cuando se elimina el usuario

  constructor(
    public dialogRef: MatDialogRef<EliminarCursoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { curso: Curse },
    private fb: FormBuilder
  ) {
    this.cursoFormEliminar = this.fb.group({
      id: this.fb.control(''),
      nombre: this.fb.control('', Validators.required),
      
    });
  }

  ngOnInit() {
    this.cargarDatosUsuario();
  }

  cargarDatosUsuario() {
    this.cursoFormEliminar.patchValue({
      id: this.data.curso.id,
      nombre: this.data.curso.nombre,
      
    });
  }
 
 // eliminar-usuario.component.ts
confirmarEliminar(): void {
  console.log('Se ejecuta confirmarEliminar');
  this.cursoEliminado.emit(true);  // Emitir evento de eliminación
  this.dialogRef.close(true);
}


  cerrarModal(): void {
    this.dialogRef.close();
  }
}
