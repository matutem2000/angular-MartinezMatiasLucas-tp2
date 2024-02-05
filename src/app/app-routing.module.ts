import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './layouts/dashboard/pages/usuarios/usuarios.component';
import { LoginComponent } from './layouts/auth/login/login.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { CursesComponent } from './layouts/dashboard/pages/curses/curses.component';
import { AsignacionProfesorMateriaComponent } from './layouts/dashboard/pages/curses/components/asignacion-profesor-materia/asignacion-profesor-materia.component';
import { InscripcionEstudianteMateriaComponent } from './layouts/dashboard/pages/curses/components/inscripcion-estudiante-materia/inscripcion-estudiante-materia.component';

const routes: Routes = [
  {
    path: '', component: UsuariosComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'estudiantes', component: InscripcionEstudianteMateriaComponent
  },
  {
    path: 'profesores', component: AsignacionProfesorMateriaComponent
  },
  {
    path: 'usuarios', component: UsuariosComponent
  },
  {
    path: 'cursos', component: CursesComponent
  },
  {
    path: '**', component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
