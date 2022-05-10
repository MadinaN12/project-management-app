interface IValidator {
  isValid: boolean;
  validMessage: string;
}

export function passwordValidator(pass: string, rePass: string): IValidator {
  if (pass.length === 0) return generateValidatorAnswer(false, 'Please, enter password');
  if (pass.length < 4) return generateValidatorAnswer(false, 'Password is too short');
  if (!pass.match(/\d/g))
    return generateValidatorAnswer(false, 'Password must contain at least 1 digit');
  if (rePass.length === 0) return generateValidatorAnswer(false, 'Please, re-enter password');
  if (pass !== rePass) return generateValidatorAnswer(false, 'Passwords do not match');
  return generateValidatorAnswer(true, '');
}

export function emailValidator(email: string): IValidator {
  const valid =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email.toLowerCase()
    );
  return valid
    ? generateValidatorAnswer(valid, '')
    : generateValidatorAnswer(valid, 'Invalid email');
}

export function nameValidator(name: string): IValidator {
  if (name.length === 0) return generateValidatorAnswer(false, 'Please enter name');
  if (name.length < 4) return generateValidatorAnswer(false, 'Name is too short');
  return generateValidatorAnswer(true, '');
}

function generateValidatorAnswer(isValid: boolean, message: string): IValidator {
  return { isValid, validMessage: message };
}
