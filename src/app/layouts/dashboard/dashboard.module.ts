import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { RouterModule } from '@angular/router';
import { CursesModule } from './pages/curses/curses.module';






@NgModule({
  declarations: [
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UsuariosModule,
    RouterModule,
    CursesModule
    
  ],
  exports: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
