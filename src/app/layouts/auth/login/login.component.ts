import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { LoginData } from '../../models/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], 
})


export class LoginComponent {
  
  loginForm: FormGroup;
  mostrarPass= false;
  

  // Constructor para inicializar el formulario
  constructor(private authService: AuthService,
    private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  // Método que se ejecuta cuando se envía el formulario
  onSubmit(): void {
if(this.loginForm.invalid) {
  this.loginForm.markAllAsTouched();     
}else {
  console.log(this.loginForm.value);
  this.authService.login(this.loginForm.value);
}
  
};
}