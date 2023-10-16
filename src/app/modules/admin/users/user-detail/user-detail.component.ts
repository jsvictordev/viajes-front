import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DaliaCheckValidators } from 'src/app/utils/dalia.fuction';
import { DaliaValidators } from 'src/app/utils/dalia.validators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.sass'],
})
export class UserDetailComponent {
  public userDetailForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _daliaValidators: DaliaValidators,
    public _daliaCheck: DaliaCheckValidators
  ) {
    this.userDetailForm = this._formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[\\._A-Za-z0-9-]+@[A-za-z0-9-]+(\\.[A-Za-z0-9-]+)(\\.[A-Za-z0-9-]+)?(\\.[A-Za-z]{2,3})?$'
          ),
        ],
      ],
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      edad: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(3), this._daliaValidators.ageOk]],
      telefono: [
        '',
        [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^(55|56)d{8}$')],
      ],
    });
  }

  get nombre(): AbstractControl {
    return this.userDetailForm.get('nombre') as AbstractControl;
  }

  get email(): AbstractControl {
    return this.userDetailForm.get('email') as AbstractControl;
  }

  get edad(): AbstractControl {
    return this.userDetailForm.get('edad') as AbstractControl;
  }

  get telefono(): AbstractControl {
    return this.userDetailForm.get('telefono') as AbstractControl;
  }

  public continuar(): void {
    if (this.userDetailForm.invalid) {
      return Object.values(this.userDetailForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(conttrol => conttrol.markAsTouched());
        }
        {
          control.markAsTouched();
        }
      });
    }

    console.log(this.userDetailForm.value);
  }
}
