import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import {
  Grid,
  TextField,
  CircularProgress,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useAxios } from '@hooks';
import { NumberInput } from '../../NumberInput';
import { Select } from '../../Select';

const useStyles = makeStyles({
  selectRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const govApi = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

const AddressForm = forwardRef(({ children, onChange }, ref) => {
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  const { data: ufs } = useAxios(`${govApi}?orderBy=nome`);
  const { data: cidades } = useAxios(`${govApi}/${uf}/municipios?orderBy=nome`);

  const classes = useStyles();

  const onSubmit = () => {
    const { nome } = cidades.find(({ id }) => id.toString() === cidade);
    const { sigla } = ufs.find(({ id }) => id.toString() === uf);

    return {
      logradouro,
      numero,
      cidade: nome,
      estado: sigla,
    };
  };

  useEffect(() => {
    onChange(!logradouro || !cidade || !uf);
  }, [logradouro, cidade, uf]);

  useImperativeHandle(ref, () => ({
    onSubmit,
  }));

  return (
    <>
      <Grid item xs={8}>
        <TextField
          variant="outlined"
          label="Endereço"
          placeholder="Endereço"
          type="text"
          value={logradouro}
          onChange={({ target: { value } }) => setLogradouro(value)}
          fullWidth
        />
      </Grid>

      <Grid item xs={4}>
        <NumberInput
          variant="outlined"
          label="Número"
          placeholder="Número"
          value={numero}
          onChange={({ target: { value } }) => setNumero(value)}
          fullWidth
        />
      </Grid>

      <Grid item xs={4} className={classes.selectRow}>
        {!ufs ? (
          <CircularProgress />
        ) : (
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="uf-select-label">UF</InputLabel>
            <Select
              labelId="uf-select-label"
              id="uf-select"
              value={uf}
              onChange={({ target: { value } }) => setUf(value)}
              label="UF"
              data={ufs}
              itemLabelKey="sigla"
              native
            />
          </FormControl>
        )}
      </Grid>

      <Grid item xs={8} className={classes.selectRow}>
        {!cidades ? (
          <CircularProgress />
        ) : (
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="cidade-select-label">Cidade</InputLabel>
            <Select
              labelId="cidade-select-label"
              id="cidade-select"
              value={cidade}
              onChange={({ target: { value } }) => setCidade(value)}
              label="Cidade"
              data={cidades}
              itemLabelKey="nome"
              native
            />
          </FormControl>
        )}
      </Grid>

      <Grid item xs={12}>
        {children}
      </Grid>
    </>
  );
});

export default AddressForm;
