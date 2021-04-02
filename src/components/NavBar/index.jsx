import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';
import { LinkButton } from '../LinkButton';

const useStyles = makeStyles(
  ({ spacing, breakpoints, palette: { primary } }) => {
    return {
      menuButton: {
        marginRight: spacing(2),
        [breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      logo: {
        marginRight: 'auto',
      },
      buttonLabel: {
        borderBottom: `solid ${primary.light} ${spacing(0.4)}px`,
      },
      drawerPaper: {
        width: 240,
      },
      content: {
        flexGrow: 1,
        padding: spacing(3),
      },
    };
  }
);

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
  const [mobileDrawer, setMobileDrawer] = useState(false);
  const classes = useStyles();

  const toggleDrawer = () => {
    setMobileDrawer(!mobileDrawer);
  };

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            className={classes.menuButton}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <img className={classes.logo} src="/vercel.svg" height="30" alt="" />
          <Hidden xsDown implementation="js">
            {rotas.map(({ nome, href }) => (
              <LinkButton
                key={nome}
                classes={{ label: classes.buttonLabel }}
                href={href}
              >
                <Typography variant="body1">{nome}</Typography>
              </LinkButton>
            ))}
          </Hidden>
        </Toolbar>
      </AppBar>
      <nav>
        <Hidden smUp implementation="js">
          <Drawer
            variant="temporary"
            open={mobileDrawer}
            onClose={toggleDrawer}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <List>
              {rotas.map(({ nome, href }) => (
                <ListItem
                  button
                  component={LinkButton}
                  href={href}
                  key={nome}
                  onClick={toggleDrawer}
                >
                  <ListItemText primary={nome} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
}
