import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursesComponent } from './curses.component';
import { CurseFormCrearComponent } from './components/curse-form-crear/curse-form-crear.component';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { AsignacionProfesorMateriaComponent } from './components/asignacion-profesor-materia/asignacion-profesor-materia.component';
import { InscripcionEstudianteMateriaComponent } from './components/inscripcion-estudiante-materia/inscripcion-estudiante-materia.component'; 
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    CursesComponent,
    CurseFormCrearComponent,
    AsignacionProfesorMateriaComponent,
    InscripcionEstudianteMateriaComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class CursesModule { }
