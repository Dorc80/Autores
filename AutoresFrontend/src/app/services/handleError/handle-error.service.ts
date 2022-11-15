import { Injectable } from '@angular/core';

@Injectable()
export class HandleErrorService {

  constructor() { }

  handleError(error: any) {
    console.log('lkkkkkkk', JSON.stringify(error));
    if (error?.error?.error?.name == 'ValidationError') {

      let errorMsg = '';

      console.log('lalala el error');

      if (error?.error?.error?.errors) {

        let errors = error?.error?.error?.errors;

        Object.keys(errors).forEach(key => {
          if (errorMsg) errorMsg += '; '
          errorMsg += errors[key].message;
        })

      }

      if (errorMsg) return errorMsg;

    }

    return error;

  }

}
