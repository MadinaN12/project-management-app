export enum ErrorTypeKind {
  name = 'name',
  email = 'email',
  password = 'password',
}

type ErrorType = ErrorTypeKind.name | ErrorTypeKind.email | ErrorTypeKind.password;

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
