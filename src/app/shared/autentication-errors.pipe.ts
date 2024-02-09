import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'autenticationErrors'
})
export class AutenticationErrorsPipe implements PipeTransform {

  transform(errors?: ValidationErrors | null, ...args: unknown[]): unknown {
    if(!!errors) {
      if(errors ['required']) return 'Este campo es requerido';
      if(errors ['username']) return 'Debe utiizar un email';
    }
    return null;

}
}