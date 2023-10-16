import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class DaliaCheckValidators {
  constructor() {}

  public validate(control: AbstractControl): boolean {
    return control.invalid && control.touched;
  }

  public showError(control: AbstractControl, formato?: string): string {
    return this.messageErrors(control, formato);
  }

  public messageErrors(control: AbstractControl, formato?: string): string {
    if (control.touched && control.errors != null) {
      console.log(control.errors);
      if (control.errors['required']) {
        return 'Este campo es requerido';
      }
      if (control.errors['email']) {
        return 'El correo no es valido';
      }
      if (control.errors['minlength']) {
        return `El minimo de caracteres es de ${control.errors['minlength'].requiredLength}`;
      }
      if (control.errors['maxlength']) {
        return `El maximo de caracteres es de ${control.errors['maxlength'].requiredLength}`;
      }
      if (control.errors['whitespace']) {
        return 'Valide la información ingresada por favor';
      }
      if (control.errors['afterDate']) {
        return 'La fecha ingresada es posterior a hoy';
      }
      if (control.errors['beforeDate']) {
        return 'La fecha ingresada es anterior a hoy';
      }
      if (control.errors['edadOk']) {
        return 'La edad requerida es entre los 18 y 75 años';
      }

      if (control.errors['pattern']) {
        if (formato === 'email') {
          return 'El formato del correo electrónico no es válido';
        }
        if (formato === 'telefono') {
          return 'El teléfono no es válido';
        }
      }
      return '';
    } else {
      return '';
    }
  }
}
