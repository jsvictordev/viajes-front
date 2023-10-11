import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DaliaCheckValidators } from 'src/app/utils/dalia.fuction';
import { DaliaValidators } from 'src/app/utils/dalia.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _daliaValidators: DaliaValidators,
    public _daliaCheck: DaliaCheckValidators
  ) {
    this.loginForm = this._formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[\\._A-Za-z0-9-]+@[A-za-z0-9-]+(\\.[A-Za-z0-9-]+)(\\.[A-Za-z0-9-]+)?(\\.[A-Za-z]{2,3})?$'
          ),
        ],
      ],
      password: ['', [Validators.required, this._daliaValidators.noWhiteSpace, Validators.minLength(5)]],
    });
  }

  public ngOnInit(): void {
    console.log(this.email);
  }

  public login(): void {
    if (this.loginForm.invalid) {
      return Object.values(this.loginForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(conttrol => conttrol.markAsTouched());
        }
        {
          control.markAsTouched();
        }
      });
    }

    console.log(this.loginForm.value);
  }

  /* -------------------------------------------------------------------------- */
  /*                                   ACCESOR                                  */
  /* -------------------------------------------------------------------------- */
  get email(): AbstractControl {
    return this.loginForm.get('email') as AbstractControl;
  }

  get password(): AbstractControl {
    return this.loginForm.get('password') as AbstractControl;
  }
}
