import NumberFormatInput from 'react-number-format';

export default function NumberFormat({ inputRef, onChange, name, ...rest }) {
  return (
    <NumberFormatInput
      {...rest}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name,
            value: values.value,
          },
        });
      }}
      isNumericString
      allowNegative={false}
    />
  );
}
