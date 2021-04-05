import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from '@material-ui/core';
import Cookie from 'js-cookie';
import api from '@services/api';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  dialogContent: {
    minWidth: 350,
  },
});

export default function StudentDialog({ open, onClose, onSubmit }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const [error, setError] = useState('');

  const [requesting, setRequesting] = useState(false);
  const classes = useStyles();

  const resetFields = () => {
    setNome('');
    setEmail('');
  };

  useEffect(resetFields, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setRequesting(true);

    const token = Cookie.get('token');

    const id = Cookie.get('id');

    api
      .post(
        `cadastro/aluno`,
        {
          nome,
          email,
          id_escola: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        onSubmit(data);
      })
      .catch(({ response: { data } }) => setError(data))
      .finally(() => setRequesting(false));
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle id="customized-dialog-title">Adicionar aluno</DialogTitle>
      <DialogContent className={classes.dialogContent} dividers>
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
                label="Email dos pais"
                placeholder="Email dos pais"
                type="email"
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="large"
                disabled={!nome || !email || requesting}
                fullWidth
              >
                {requesting ? <CircularProgress size={26} /> : 'Enviar'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
}
