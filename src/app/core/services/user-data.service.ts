import { Injectable } from '@angular/core';
import { Usuario } from '../../layouts/dashboard/pages/usuarios/models/usuarios.interface';
import { ModificarUsuarioComponent } from '../../layouts/dashboard/pages/usuarios/components/modificar-usuario/modificar-usuario.component';
import { EliminarUsuarioComponent } from '../../layouts/dashboard/pages/usuarios/components/eliminar-usuario/eliminar-usuario.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Observable, delay, map, of, switchMap } from 'rxjs';
import { LoadingService } from './loading.service';


let USERS_DB: Usuario[] = [
  {
    id: 1,
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'juan@example.com',
    password: 'clave123',
    rol: 'estudiante'
  },
  {
    id: 2,
    nombre: 'María',
    apellido: 'Gómez',
    email: 'maria@example.com',
    password: 'clave456',
    rol: 'administrador'
  },
  {
    id: 3,
    nombre: 'Pedro',
    apellido: 'Rodríguez',
    email: 'pedro@example.com',
    password: 'clave789',
    rol: 'profesor'
  }
];




@Injectable()
export class UserDataService {

  constructor(public dialog: MatDialog, private loadingService: LoadingService){};

 
//obtener usuarios
  getUsuarios() {
    return of (USERS_DB).pipe(delay(3000));
}
//crear usuarios
  createUser(payload: Usuario){
    const nextId = USERS_DB.length > 0 ? Math.max(...USERS_DB.map(user => user.id)) + 1 : 1;
    payload.id = nextId;
    USERS_DB.push(payload);
    return this.getUsuarios();
  }


// Eliminar usuario
eliminarUsuario(usuario: Usuario): Observable<Usuario[]> {
   //console.log('eliminar en user-data.service- apreté botón');
  const dialogRef = this.dialog.open(EliminarUsuarioComponent, {
    data: { usuario },
  });
  
  return dialogRef.afterClosed().pipe(
    map((eliminado: boolean) => {
      if (eliminado) {
        // Eliminar el usuario del dataSource
        USERS_DB = USERS_DB.filter(u => u.id !== usuario.id);
      }
      return [...USERS_DB];
    })
  );

}


//Modificar usuario
modificarUsuario(usuario: Usuario): Observable<Usuario[]> {
  console.log('Usuario recibido a modificar', usuario);
  const dialogRef = this.dialog.open(ModificarUsuarioComponent, {
    data: { usuario },
  });

  return dialogRef.afterClosed().pipe(
    map((usuarioModificado: Usuario) => {
      if (usuarioModificado) {
        console.log('Datos del usuario modificado:', usuarioModificado);
        // Modificar el usuario en el dataSource
        USERS_DB = USERS_DB.map((u) =>
          u.id === usuario.id ? { ...u, ...usuarioModificado } : u
        );
        console.log('El array nuevo de usuarios con la modificación', USERS_DB);
      }
      return [...USERS_DB];
    })
  );
}

//Obtener usuario por rol
getUsuariosPorRol(rol: string): Observable<Usuario[]> {
  const usuariosFiltrados = USERS_DB.filter(usuario => usuario.rol === rol);
  return of(usuariosFiltrados);
}
}