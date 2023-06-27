import { withInputController } from './withInputController';
import { PasswordInput } from './password-input';
import { InputControllerType } from './types';

export function passwordInputControllerTemplate<T>(): InputControllerType<T> {
  return withInputController<T>(PasswordInput);
}
