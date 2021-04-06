import React from 'react';
import { Formik, Field, Form } from 'formik';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {
  Button,
  Paper,
  Grid,
  Box,
  Typography,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import Search from '@material-ui/icons/Search';

function Buscacep() {
  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
  }

  function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;
    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('logradouro', data.logradouro);
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
        setFieldValue('uf', data.uf);
      });
  }
  const useStyles = makeStyles(({ spacing }) => ({
    paper: {
      marginTop: spacing(10),
      width: spacing(45),
    },
    form: {
      padding: spacing(4),
    },
  }));

  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      py={10}
    >
      <Grid xs={12} md={12} className={classes.form}>
        <Typography variant="h4">
          Fulano, digite seu CEP para localizarmos escolas próximas a você:
        </Typography>
      </Grid>
      <Grid xs={12} md={12} className={classes.form}>
        <TextField
          className={classes.margin}
          variant="outlined"
          id="cep"
          label="Digite seu CEP"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          color="primary"
          href="#contained-buttons"
          className={classes.button}
        >
          Pesquisar
        </Button>
      </Grid>
      <Grid xs={12} md={12} className={classes.form}>
        <Typography variant="h4">LOGO DO PROJETO</Typography>
      </Grid>
    </Box>
  );
}

export default Buscacep;
