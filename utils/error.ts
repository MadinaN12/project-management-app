import { ErrorType } from '../types/types';

export class FormError extends Error {
  type: string;
  constructor(type: ErrorType, msg: string) {
    super(msg);
    this.type = type;
    Object.setPrototypeOf(this, FormError.prototype);
  }

  errorType() {
    return this.type;
  }
}
