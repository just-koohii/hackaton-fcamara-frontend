import {
  Select as MUiSelect,
  MenuItem,
  useMediaQuery,
} from '@material-ui/core';

import { useTheme } from '@material-ui/core/styles';

export function Select({
  name,
  id,
  native,
  data = [],
  itemLabelKey,
  hideEmpty,
  ...rest
}) {
  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down('xs'));

  if (mobile || native)
    return (
      <MUiSelect
        native
        placeholder="Selecione"
        inputProps={{
          name,
          id,
        }}
        {...rest}
      >
        {!hideEmpty && <option aria-label="Selecione" value="" />}
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item[itemLabelKey]}
          </option>
        ))}
      </MUiSelect>
    );

  return (
    <MUiSelect {...rest}>
      <MenuItem value="">Selecione</MenuItem>
      {data.map((item) => (
        <MenuItem key={item.id} value={item.id}>
          {item[itemLabelKey]}
        </MenuItem>
      ))}
    </MUiSelect>
  );
}
