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

export default function Loja() {

    faker.locale  =  "pt_BR" ;

    const useStyles = makeStyles((theme) => ({
        grid: {
          padding: theme.spacing(5),
        },
        header: {
            margin: "0",
        },
        large: {
            width: '200px',
            height: '200px'
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
                Fulano, listaremos as lojas parceiras do projeto. 
                Todas elas oferecem descontos para os produtos a serem doados e efetuam a entrega 
                diretamente na escola escolhida. 
            </Typography>
            </Grid>
            <Box display="flex" flexDirection="row" >
            <Grid item xs={12} md={6} className={classes.grid}>
                <img src='/broken-image.jpg' className={classes.large}/><br></br>
                <Typography textAlign="center" variant="h6">
                    {faker.company.companyName()}
                </Typography>
            </Grid>
        
            <Grid item xs={12} md={6}>
                <ul className={classes.list} >
                    <li><b>{faker.company.companyName()}</b></li>
                    <li>Endereço: {faker.address.streetAddress()}, {faker.address.zipCode()} - {faker.address.city()}</li>
                    <li>Site:  {faker.internet.url()}</li>
                    <li>Tel:  {faker.phone.phoneNumber()}</li>
                    <li>Benefício:  {faker.datatype.number({min: 10, max: 20})}% de desconto em compras destinadas à doação. </li>
                </ul>
            </Grid> 
        </Box>
        <Grid className={classes.grid}>
          <Typography variant="h4">LOGO DO PROJETO</Typography>
        </Grid>

        </Box>
    );
  }