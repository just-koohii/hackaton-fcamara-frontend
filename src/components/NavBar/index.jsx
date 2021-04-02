import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LinkButton } from '../LinkButton';

const useStyles = makeStyles(({ palette: { primary }, spacing }) => {
  return {
    logo: {
      marginRight: 'auto',
    },
    buttonLabel: {
      borderBottom: `solid ${primary.light} ${spacing(0.4)}px`,
    },
  };
});

const rotas = [
  {
    nome: 'conheça o projeto',
    href: '/',
  },
  {
    nome: 'contato',
    href: '/login',
  },
  {
    nome: 'FAQ',
    href: '/doar',
  },
];

export function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <img className={classes.logo} src="/vercel.svg" height="30" alt="" />
        {rotas.map(({ nome, href }) => (
          <LinkButton
            key={nome}
            classes={{ label: classes.buttonLabel }}
            href={href}
          >
            <Typography variant="body1">{nome}</Typography>
          </LinkButton>
        ))}
      </Toolbar>
    </AppBar>
  );
}
