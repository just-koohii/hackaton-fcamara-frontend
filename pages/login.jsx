import { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {
  Paper,
  Grid,
  Box,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) => ({
  paper: {
    marginTop: spacing(10),
    width: spacing(45),
  },
  form: {
    padding: spacing(4),
  },
}));

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert(`Tentativa de login: email = ${email} | senha = ${senha}`);
  };

  return (
    <main>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        py={10}
      >
        <Typography variant="h1" paragraph>
          Login
        </Typography>

        <Paper elevation={3} className={classes.paper}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Email"
                  placeholder="Email"
                  type="email"
                  inputProps={{ maxLength: 35 }}
                  value={email}
                  onChange={({ target: { value } }) => setEmail(value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="senha"
                  type="password"
                  inputProps={{ maxLength: 10 }}
                  value={senha}
                  onChange={({ target: { value } }) => setSenha(value)}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  size="large"
                  disabled={!email || !senha}
                  fullWidth
                >
                  Entrar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </main>
  );
}

/*
Refatorar em arquivo separado

 <form onSubmit={this.handleSubmit}>
          <select>
            <option value="Opções de Escola">Escola Municipal</option>
            <option value="Opções de Escola">Escola Estadual</option>
          </select>
          <br />
          <input
            type="text"
            name="Nome"
            placeholder="Nome dos Pais"
            onChange={this.handleInputChange}
          />
          <br />
          <input
            type="text"
            name="Nome"
            placeholder="Nome do Aluno"
            onChange={this.handleInputChange}
          />
          <br />
          <input
            type="text"
            name="Nome"
            placeholder="Nome da Escola"
            onChange={this.handleInputChange}
          />
          <br />
          <input
            type="text"
            name="Nome"
            placeholder="Responsável pelo cadastro"
            onChange={this.handleInputChange}
          />
          <br />
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={this.handleInputChange}
          />
          <br />
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            onChange={this.handleInputChange}
          />
          <br />
          <input
            type="password"
            name="senha"
            placeholder="Criar Senha"
            onChange={this.handleInputChange}
          />
          <br />
          <button type="submit">Enviar</button>
        </form>
*/
