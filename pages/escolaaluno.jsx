import  React  from  'react' ;
import faker from 'faker';
import makeStyles from '@material-ui/core/styles/makeStyles';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import {  
    Avatar,
    Button,
    Grid,
    Box,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,

} from '@material-ui/core';

export default function escolaAlunos() {

    faker.locale  =  "pt_BR" ;

    const useStyles = makeStyles((theme) => ({
        grid: {
          padding: theme.spacing(5),
        },
        header: {
            margin: "0",
        },
        large: {
            width: '100px',
            height: '100px'
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
            <Grid item xs={12} md={12} className={classes.header}>
                <Typography variant="h3">Nome da Escola</Typography>
            </Grid>
            <Grid  item xs={12} md={12} className={classes.grid}>
            <Typography variant="h5">
                Precisa completar a lista de X alunos. Clique no ícone abaixo para obter mais
                informações sobre o que está sendo solicitado: 
            </Typography>
            </Grid>
            <Box display="flex" flexDirection="row" >
            <Grid item xs={12} md={6} className={classes.grid}>
                <Avatar src='/broken-image.jpg' className={classes.large}/><br></br>
                <Typography textAlign="center">
                    {faker.name.firstName()}
                </Typography>
            </Grid>
        
            <Grid item xs={12} md={6}>
                <ul className={classes.list} >
                    <li>{faker.datatype.number({min:7, max: 16})} ano(s) de idade</li>
                    <li>Precisa de: </li>
                    <li>2 canetas </li>
                    <li>3 lápis </li>
                </ul>
            </Grid> 
        </Box>
        <Grid className={classes.grid}>
          <Typography variant="h4">LOGO DO PROJETO</Typography>
        </Grid>

        </Box>
    );
  }