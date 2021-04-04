import { Doador, Escola, Pais } from './Variants';

export function SignUpForms({ type, onSubmit }) {
  switch (type) {
    case 'doador':
      return <Doador type={type} onSubmit={onSubmit} />;

    case 'escola':
      return <Escola type={type} onSubmit={onSubmit} />;

    default:
      return <Pais type={type} onSubmit={onSubmit} />;
  }
}
