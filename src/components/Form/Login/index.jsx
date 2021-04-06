/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {
  Paper,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  CircularProgress,
  Link,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import NextLink from 'next/link';
import Cookie from 'js-cookie';
import moment from 'moment';
import api from '@services/api';

const useStyles = makeStyles(({ spacing }) => ({
  paper: {
    width: spacing(45),
  },
  form: {
    padding: spacing(4),
  },
  signUp: {
    marginTop: spacing(2),
  },
}));

export function LoginForm({ type, onSubmit }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [showPsw, setShowPsw] = useState(false);
  const [requesting, setRequesting] = useState(false);
  const classes = useStyles();

  const toggleVisibility = () => setShowPsw(!showPsw);

  const handleSubmit = (e) => {
    e.preventDefault();

    setRequesting(true);

    api
      .post(`login/${type}`, {
        email,
        senha,
      })
      .then(({ data }) => {
        const secure = process.env.NODE_ENV === 'production';

        Cookie.set('id', data.id, {
          expires: moment().add(4, 'h').toDate(),
          secure,
        });

        Cookie.set('type', type, {
          expires: moment().add(4, 'h').toDate(),
          secure,
        });

        Cookie.set('token', data.token, {
          expires: moment().add(4, 'h').toDate(),
          secure,
        });

        onSubmit();
      })
      .catch(({ response: { data } }) => setError(data))
      .finally(() => setRequesting(false));
  };

  return (
    <Paper elevation={3} className={classes.paper}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {error && (
            <Grid item xs={12}>
              <Typography variant="body2" align="center" color="error">
                <b>{error.toUpperCase()}</b>
              </Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Senha"
              placeholder="Senha"
              type={showPsw ? 'text' : 'password'}
              value={senha}
              onChange={({ target: { value } }) => setSenha(value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={toggleVisibility}>
                      {showPsw ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
                inputProps: {
                  minLength: 8,
                },
              }}
              fullWidth
            />

            <Typography
              color="primary"
              align="right"
              className={classes.signUp}
            >
              <NextLink href={`/cadastro/${type}`} passHref>
                <Link color="inherit" underline="hover">
                  Não tem cadastro?
                </Link>
              </NextLink>
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              disabled={!email || !senha || requesting}
              fullWidth
            >
              {requesting ? <CircularProgress size={26} /> : 'Entrar'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
