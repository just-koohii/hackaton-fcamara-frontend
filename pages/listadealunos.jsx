import  React  from  'react' ;
import makeStyles from '@material-ui/core/styles/makeStyles';
import faker from 'faker';
import {  
    Avatar,
    Button,
    Grid,
    Box,
    Typography
} from '@material-ui/core';

export default function listaAlunos() {
    
    const useStyles = makeStyles(({ spacing }) => ({
        grid: {
          padding: spacing(5),
        },
        header: {
            margin: "0",
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
            <Grid xs={12} md={12} className={classes.header}>
                <Typography variant="h3">Nome da Escola</Typography>
            </Grid>
          <Grid xs={12} md={12} className={classes.grid}>
            <Typography variant="h5">
                Precisa completar a lista de X alunos. Clique no ícone abaixo para obter mais
                informações sobre o que está sendo solicitado: 
            </Typography>
            </Grid>
            <Grid className={classes.grid}>
            <Button>
                <Avatar xs = {12}src="/broken-image.jpg" /><br></br>
            </Button>
            <Button>
                <Avatar xs = {6}src="/broken-image.jpg" /><br></br>
            </Button>
            <Button>
                <Avatar xs = {4}src="/broken-image.jpg" /><br></br>
            </Button>
            <Button>
                <Avatar xs = {2}src="/broken-image.jpg" /><br></br>
            </Button>
            <Button>
                <Avatar xs = {1}src="/broken-image.jpg" /><br></br>
            </Button>
            </Grid>
        <Grid className={classes.grid}>
          <Typography variant="h4">LOGO DO PROJETO</Typography>
        </Grid>

        </Box>
    );
  }