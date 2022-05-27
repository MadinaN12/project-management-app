export enum ErrorTypeKind {
  name = 'name',
  email = 'email',
  password = 'password',
}

export type ErrorType = ErrorTypeKind.name | ErrorTypeKind.email | ErrorTypeKind.password;

export interface IValidator {
  isValid: boolean;
  validMessage: string;
}

export interface IPopupNotification {
  errorNotification: boolean;
  errorMessage: string;
}
