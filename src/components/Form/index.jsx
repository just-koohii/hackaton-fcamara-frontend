import { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Paper, Grid, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) => ({
  paper: {
    marginTop: spacing(10),
    width: spacing(45),
  },
  form: {
    padding: spacing(4),
  },
}));

export function Form(props) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const classes = useStyles();

  const { onSubmit } = props;

  return (
    <Paper elevation={3} className={classes.paper}>
      <form className={classes.form} onSubmit={onSubmit}>
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
              inputProps={{
                maxLength: 10,
                minLength: 5,
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
