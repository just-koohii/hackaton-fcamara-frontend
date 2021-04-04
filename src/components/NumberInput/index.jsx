import { TextField } from '@material-ui/core';
import NumberFormat from './components/NumberFormat';

export function NumberInput({ ...rest }) {
  return (
    <TextField
      {...rest}
      InputProps={{
        inputComponent: NumberFormat,
      }}
    />
  );
}
