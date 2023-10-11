import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class DaliaValidators {
  constructor() {}

  /**
   * Valida que el control no vaya unicamente con espacios en blanco
   * @date 10/11/2023 - 5:42:56 PM
   * @author Victor R. Jose
   *
   * @public
   * @param {FormControl} control
   * @returns {*}
   */
  public noWhiteSpace(control: FormControl): any {
    if (control.value == '') {
      return null;
    } else {
      const isWhiteSpace: boolean = (control.value || '').trim().length === 0;
      const isValid = !isWhiteSpace;
      return isValid ? null : { whitespace: true };
    }
  }

  /**
   * Valida que la fecha seleccionada no sea posterior a hoy
   *
   * @date 6/8/2022 - 12:07:31
   * @author Victor R. Jose Santiago
   *
   * @public
   * @param control
   * @returns
   */
  public noAfterNowDate(control: FormControl): any {
    if (control.value == null) {
      return null;
    } else {
      const today = moment();
      const dateSelected = moment(control.value);
      return dateSelected.isSameOrBefore(today, 'day') ? null : { afterDate: true };
    }
  }

  /**
   * Valida que la fecha seleccionada no sea anterior a hoy
   *
   * @date 6/8/2022 - 12:07:49
   * @author Victor R. Jose Santiago
   *
   * @public
   * @param control
   * @returns
   */
  public noBeforeNowDate(control: FormControl): any {
    if (control.value == null) {
      return null;
    } else {
      const today = moment();
      const dateSelected = moment(control.value);
      return dateSelected.isSameOrAfter(today, 'day') ? null : { beforeDate: true };
    }
  }

  // cREAR VALIDADOR PARA VERIFICAR QUE EL USUARIO NO SEA MENOR DE EDAD
  // cREAR VALIDADOR PARA VERIFICAR QUE EL USUARIO NO SOBREPASE LOS 75 AÑOS
}
