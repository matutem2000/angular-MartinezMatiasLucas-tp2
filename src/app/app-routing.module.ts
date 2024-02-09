import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { NotFoundComponent } from './layouts/dashboard/pages/not-found/not-found.component';
import { authGuard } from './core/guards/auth.guard';
import { LoginComponent } from './layouts/auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./layouts/auth/auth.module').then((m) => m.AuthModule),
  },
  
    {
      path: 'dashboard',
      canActivate:[authGuard],
      component: DashboardComponent,
      loadChildren: () => import('./layouts/dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
  {
    path: '**', component: NotFoundComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
