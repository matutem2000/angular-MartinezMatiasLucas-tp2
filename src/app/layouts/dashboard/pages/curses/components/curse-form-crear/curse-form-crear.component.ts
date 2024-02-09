
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurseDataService } from '../../../../../../core/services/curse-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Curse } from '../../models/curses.interfaces';


@Component({
  selector: 'app-curse-form-crear',
  templateUrl: './curse-form-crear.component.html',
  styleUrl: './curse-form-crear.component.scss'
})
export class CurseFormCrearComponent  {
  materiaForm: FormGroup;

  constructor(private fb: FormBuilder, private curseDataService: CurseDataService, private dialogRef: MatDialogRef<CurseFormCrearComponent>) {
    // Inicializa materiaForm en el constructor
    this.materiaForm = this.fb.group({
      nombre: ['', Validators.required],
    });
  }
  onSubmit() {
    console.log('entre al metodo del componente curse-form-crear');
    if (this.materiaForm.valid) {
      const nombre = this.materiaForm.value.nombre;

      // Obtener la cantidad actual de cursos y generar el nuevo id
      this.curseDataService.getCurses().subscribe(curses => {
        const nuevoId = curses.length + 1;

        // Crear el nuevo curso
        const nuevoCurso: Curse = { id: nuevoId, nombre };
          console.log(nuevoCurso);
        // Guardar el nuevo curso en tu servicio de datos
        this.curseDataService.guardarCurso(nuevoCurso);

        // Cerrar el diálogo después de guardar
        this.dialogRef.close();

        // También puedes cerrar el formulario, limpiar los campos, etc.
        this.materiaForm.reset();
      });
    }
  }
  
}
