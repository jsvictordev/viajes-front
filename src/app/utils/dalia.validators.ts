import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class DaliaValidators {
  constructor() {}

  public noWhiteSpace(control: FormControl): any {
    if (control.value == '') {
      return null;
    } else {
      const isWhiteSpace: boolean = (control.value || '').trim().length === 0;
      const isValid = !isWhiteSpace;
      return isValid ? null : { whitespace: true };
    }
  }

  public noAfterNowDate(control: FormControl): any {
    if (control.value == null) {
      return null;
    } else {
      const today = moment();
      const dateSelected = moment(control.value);
      return dateSelected.isSameOrBefore(today, 'day') ? null : { afterDate: true };
    }
  }

  public noBeforeNowDate(control: FormControl): any {
    if (control.value == null) {
      return null;
    } else {
      const today = moment();
      const dateSelected = moment(control.value);
      return dateSelected.isSameOrAfter(today, 'day') ? null : { beforeDate: true };
    }
  }

  public ageOk(control: FormControl): any {
    if (control.value == null) {
      return null;
    } else {
      if (control.value > 18 && control.value < 75) {
        return { edadOk: null };
      } else {
        return { edadOk: true };
      }
    }
  }
}
