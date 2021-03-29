import { PureComponent } from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { LinkButton } from '../LinkButton';

const rotas = [
  {
    nome: 'home',
    href: '/',
  },
  {
    nome: 'login',
    href: '/login',
  },
  {
    nome: 'doar',
    href: '/doar',
  },
  {
    nome: 'contato',
    href: '/contato',
  },
];

export class NavBar extends PureComponent {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          {rotas.map(({ nome, href }) => (
            <Button
              key={nome}
              variant="text"
              color="inherit"
              href={href}
              as={LinkButton}
            >
              {nome}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    );
  }
}
