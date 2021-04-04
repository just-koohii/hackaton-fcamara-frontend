/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useRef } from 'react';
import {
  Button,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Link,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import NextLink from 'next/link';
import Cookie from 'js-cookie';

export function AuthMenu({ mobile = false, ...rest }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const authed = !!Cookie.get('token');
  const type = Cookie.get('type');

  const handleClose = ({ target }) => {
    if (anchorRef.current && anchorRef.current.contains(target)) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
    }
  };

  const toggleMenu = () => setOpen(!open);
  if (!mobile)
    return (
      <Button
        variant="text"
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        ref={anchorRef}
        onClick={toggleMenu}
      >
        Minha conta
        {!open ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper elevation={4}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    {!authed ? (
                      <div>
                        <MenuItem>
                          <NextLink href="/login" passHref>
                            <Link color="inherit" underline="none">
                              entrar
                            </Link>
                          </NextLink>
                        </MenuItem>
                        <MenuItem>
                          <NextLink href="/cadastro" passHref>
                            <Link color="inherit" underline="none">
                              cadastrar
                            </Link>
                          </NextLink>
                        </MenuItem>
                      </div>
                    ) : (
                      <div>
                        <MenuItem>
                          <NextLink href={`/dashboard/${type}`} passHref>
                            <Link color="inherit" underline="none">
                              dashboard
                            </Link>
                          </NextLink>
                        </MenuItem>
                        <MenuItem>
                          <NextLink href="/logout" passHref>
                            <Link color="inherit" underline="none">
                              sair
                            </Link>
                          </NextLink>
                        </MenuItem>
                      </div>
                    )}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Button>
    );

  return (
    <>
      {!authed ? (
        <>
          <ListItem button href="/login" {...rest}>
            <ListItemText primary="login" />
          </ListItem>

          <ListItem button href="/cadastro" {...rest}>
            <ListItemText primary="cadastrar" />
          </ListItem>
        </>
      ) : (
        <>
          <ListItem button href="/dashboard" {...rest}>
            <ListItemText primary="dashboard" />
          </ListItem>

          <ListItem button href="/logout" {...rest}>
            <ListItemText primary="sair" />
          </ListItem>
        </>
      )}
    </>
  );
}
