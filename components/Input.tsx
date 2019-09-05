import { InputStyles } from './styles/FormStyles';
import { IInputProps } from '../interfaces/index';

const Input = (props: IInputProps) => {
  return (
    <label>
      {props.label}
      <InputStyles
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        validationFunc={props.validationFunc}
        onChange={props.onChange}
        value={props.value}
      />
    </label>
  );
};

export default Input;
