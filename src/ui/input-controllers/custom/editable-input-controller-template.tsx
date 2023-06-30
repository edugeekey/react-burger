import { withInputController } from './withInputController';
import { EditableInput } from './editable-input';
import { InputControllerType } from './types';

export function editableInputControllerTemplate<T>(): InputControllerType<T> {
  return withInputController<T>(EditableInput);
}
