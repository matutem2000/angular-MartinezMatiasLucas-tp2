import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { Curse } from '../../models/curses.interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modificar-curso',
  templateUrl: './modificar-curso.component.html',
  styleUrl: './modificar-curso.component.scss'
})
export class ModificarCursoComponent {
  cursoFormModif: FormGroup;

  @Output()
  cursoCreado = new EventEmitter();
  
    constructor(
      public dialogRef: MatDialogRef<ModificarCursoComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { curso: Curse },
      private fb: FormBuilder){
      this.cursoFormModif=this.fb.group({
        id: this.fb.control(''),
        nombre: this.fb.control('', Validators.required),
        
      });
    }

    ngOnInit() {
      // Cargar datos del usuario en el formulario al inicializar el componente
      this.cargarDatosUsuario();
    }
  
    cargarDatosUsuario() {
      // Patch los valores del usuario en el formulario
      this.cursoFormModif.patchValue({
        id: this.data.curso.id,
        nombre: this.data.curso.nombre
       
      });
    }
  
  
     onSubmit(): void {
      if (this.cursoFormModif.valid) {
        const cursoModificado: Curse = this.cursoFormModif.value;
        console.log("curso modificado:", cursoModificado);
        this.dialogRef.close(cursoModificado);
      }
    }
    

// 
  cerrarModal() {
    this.dialogRef.close(); // Cierra el diálogo
  }

}
