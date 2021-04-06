/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from '@material-ui/core';
import { useAxios } from '@hooks';
import Cookie from 'js-cookie';
import api from '@services/api';
import { makeStyles } from '@material-ui/core/styles';
import { NumberInput } from '../../../../../NumberInput';

const useStyles = makeStyles({
  dialogContent: {
    minWidth: 350,
  },
});

export default function ListDialog({ open, onClose, onSubmit }) {
  const [ano, setAno] = useState(new Date().getFullYear());
  const [materials, setMaterials] = useState([]);
  const [error, setError] = useState('');
  const [requesting, setRequesting] = useState(false);

  const { data: mats } = useAxios(
    `${process.env.NEXT_PUBLIC_API_URL}listar/materiais`
  );
  const classes = useStyles();

  useEffect(() => {
    if (mats) {
      setMaterials(mats.map((item) => ({ ...item, qtd: 0 })));
    }
  }, [mats, open]);

  const handleQtdChange = (id, value) => {
    const item = materials.findIndex((mat) => mat.id === id);

    materials[item] = {
      ...materials[item],
      qtd: value,
    };

    setMaterials([...materials]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setRequesting(true);

    const token = Cookie.get('token');

    const id = Cookie.get('id');

    const items = materials.map(({ id: matID, qtd }) => ({ id: matID, qtd }));

    api
      .post(
        `cadastro/escola/${id}/lista/${ano}`,
        {
          items,
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
    <Dialog onClose={onClose} open={open} scroll="paper">
      <DialogTitle id="customized-dialog-title">Adicionar lista</DialogTitle>
      <form className={classes.form} onSubmit={handleSubmit}>
        <DialogContent className={classes.dialogContent} dividers>
          <Grid container spacing={4}>
            {error && (
              <Grid item xs={12}>
                <Typography variant="body2" align="center" color="error">
                  <b>{error.toUpperCase()}</b>
                </Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <NumberInput
                variant="outlined"
                label="Ano"
                placeholder="Ano"
                value={ano}
                onChange={({ target: { value } }) => setAno(value)}
                fullWidth
              />
            </Grid>
            {materials?.map(({ id, nome, qtd }) => (
              <>
                <Grid key={id} item xs={8}>
                  <TextField
                    variant="outlined"
                    label="Material"
                    placeholder="Material"
                    type="text"
                    value={nome.toUpperCase()}
                    fullWidth
                    inputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <NumberInput
                    variant="outlined"
                    label="Quantidade"
                    placeholder="Quantidade"
                    value={qtd}
                    onChange={({ target: { value } }) =>
                      handleQtdChange(id, value)
                    }
                    fullWidth
                  />
                </Grid>
              </>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="large"
            fullWidth
          >
            {requesting ? <CircularProgress size={26} /> : 'Enviar'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
