import { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Paper, Grid, Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) => ({
  paper: {
    marginTop: spacing(10),
    width: spacing(45),
  },
  form: {
    padding: spacing(4),
  },
}));

export function Form({ onSubmit, error }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const classes = useStyles();

  const handleSubmit = () => {
    onSubmit(email, senha);
  };

  return (
    <Paper elevation={3} className={classes.paper}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={4}>
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
              type="password"
              inputProps={{
                minLength: 8,
              }}
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
  );
}
