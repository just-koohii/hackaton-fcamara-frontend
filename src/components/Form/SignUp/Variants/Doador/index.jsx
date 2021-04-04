/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect, useRef } from 'react';
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
import Address from '../../../Address';

const useStyles = makeStyles(({ spacing }) => ({
  paper: {
    width: spacing(45),
  },
  form: {
    padding: spacing(4),
  },
  signUp: {
    marginBottom: spacing(2),
  },
}));

export function Doador({ type, onSubmit }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [showPsw, setShowPsw] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [validateAddr, setValidateAddr] = useState(false);
  const [requesting, setRequesting] = useState(false);
  const addressRef = useRef();
  const classes = useStyles();

  const toggleVisibility = () => setShowPsw(!showPsw);

  const handleSubmit = (e) => {
    e.preventDefault();

    setRequesting(true);

    api
      .post(`cadastro/${type}`, {
        nome,
        email,
        senha,
        ...addressRef.current.onSubmit(),
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

  useEffect(() => {
    setDisableButton(!nome || !email || !senha || validateAddr);
  }, [nome, email, senha, validateAddr]);

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
              label="Nome"
              placeholder="Nome"
              type="text"
              value={nome}
              onChange={({ target: { value } }) => setNome(value)}
              fullWidth
            />
          </Grid>
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
          </Grid>

          <Address ref={addressRef} onChange={setValidateAddr}>
            <Typography
              color="primary"
              align="right"
              className={classes.signUp}
            >
              <NextLink href={`/login/${type}`} passHref>
                <Link color="inherit" underline="hover">
                  Já tem cadastro?
                </Link>
              </NextLink>
            </Typography>
          </Address>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              disabled={disableButton || requesting}
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
