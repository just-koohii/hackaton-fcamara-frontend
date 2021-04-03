import  React  from  'react' ;
import  { Formik , Field , Form } from 'formik';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {  
    Button,
    Grid,
    Box,
    Typography,
    TextField,
    InputAdornment
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
        button: {
            margin: "0 auto"
        }
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
            <Typography variant="h5">
                Fulano, listaremos as lojas parceiras do projeto. 
                Todas elas oferecem descontos para os produtos a serem doados e efetuam a entrega 
                diretamente na escola escolhida. 
            </Typography>
          </Grid>
          <Grid xs={12} md={12} className={classes.form}>
            <TextField
              className={classes.margin}
              variant='outlined'
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
            <Button variant="contained" color="primary" href="#contained-buttons" className={classes.button} >
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
  
  /*
  <Paper elevation={3} className={classes.paper}>
            <Grid className="Buscacep">
            <Formik
                onSubmit={onSubmit}
                validateOnMount
                initialValues={{
                CEP: '',
                Logradouro: '',
                Número: '',
                Complemento: '',
                Bairro: '',
                Cidade: '',
                UF: '',
            }}
            render={({ isValid, setFieldValue }) => (
                <Form>
                <div className="form-control-group">
                  <label>Cep</label>
                  <Field name="cep" type="text" onBlur={(ev) => onBlurCep(ev, setFieldValue)} />
                </div>
                <div className="form-control-group">
                  <label>Logradouro</label>
                  <Field name="logradouro" type="text" />
                </div>
                <div className="form-control-group">
                  <label>Número</label>
                  <Field name="numero" type="text" />
                </div>
                <div className="form-control-group">
                  <label>Complemento</label>
                  <Field name="complemento" type="text" />
                </div>
                <div className="form-control-group">
                  <label>bairro</label>
                  <Field name="bairro" type="text" />
                </div>
                <div className="form-control-group">
                  <label>Cidade</label>
                  <Field name="cidade" type="text" />
                </div>
                <div className="form-control-group">
                  <label>Estado</label>
                  <Field component="select" name="uf">
                    <option value={null}>Selecione o Estado</option>
                    <option value="SP">São Paulo</option>
                    <option value="SC">Santa Catarina</option>
                  </Field>
                </div>
                <button type="submit" disabled={!isValid}>Enviar</button>
              </Form>
          )}
          
        />
        </Grid>
        </Paper>

        */    