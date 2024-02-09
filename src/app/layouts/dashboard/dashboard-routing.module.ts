import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionEstudianteMateriaComponent } from './pages/curses/components/inscripcion-estudiante-materia/inscripcion-estudiante-materia.component';
import { AsignacionProfesorMateriaComponent } from './pages/curses/components/asignacion-profesor-materia/asignacion-profesor-materia.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CursesComponent } from './pages/curses/curses.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  
  
  {
    path: 'estudiantes', component: InscripcionEstudianteMateriaComponent
  },
  {
    path: 'profesores', component: AsignacionProfesorMateriaComponent
  },
  {
    path: 'usuarios', 
    //component: UsuariosComponent
    loadChildren: () => import('./pages/usuarios/usuarios.module').then((m) => m.UsuariosModule)
  },
  {
    path: 'cursos', 
    loadChildren: () => import('./pages/curses/curses.module').then(m => m.CursesModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
