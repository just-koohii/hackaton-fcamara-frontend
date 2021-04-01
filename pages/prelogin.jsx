import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Carousel from 'react-img-carousel';
import { Grid, Box } from '@material-ui/core';

require('react-img-carousel/lib/carousel.css');

const useStyles = makeStyles((theme) => ({
    buttons: {
        //background: 'linear-gradient(45deg, #FEFEFE 30%, #C54E64 90%)',
        border: 0,
        borderRadius: 3,
        //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 56,
        width: 170,
        padding: '0 30px',
        margin: theme.spacing(1.75),
        justifyContent: 'center'
    },
    divButton: {
        //background: "red",
        //float: 'right',
        //width: "20%",
        //alignContent: "center"
        //marginLeft: "10%",
        //marginRight: "-10%",
        marginTop: "2%",
        //padding: "0px",
        //justifyContent: "center"
    },
    divHeader: {
        fontSize: 32,
        fontWeight: 900,
        fontFamily: "Roboto",
        textTransform: 'uppercase',
        //padding: '20px',
        
    },
    divImages: {
        //background: "yellow",
        //float: 'left',
        //marginLeft: "10px",
        //marginRight: "5%",
        //height: "30%",
        //width: "55%",
        //margin: "10px"
    },
    /*divFooter: {
        background: "blue",
        float: 'left',
        width: "100%",
        
    },*/
    grid: {
        width: "100%",
        margin: "10px"
    }
}));


export default function ContainedButtons() {
  const classes = useStyles();

  return (
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={12} md={12} className={classes.divHeader}>LOGO E NOME DO PROJETO</Grid>
        <Grid item xs={12} md={8} className={classes.divImages}>
            <Carousel viewportWidth="100%" /*slideWidth="100%"*/ cellPadding={ 0 } transitionDuration="2000" autoplay="True"
            draggable="True" pauseOnHover="True">
                <img src='https://placekitten.com/200/300'/>
                <img src='https://placekitten.com/300/300'/>
                <img src='https://placekitten.com/400/300'/>    
            </Carousel>
        </Grid>
    <Grid item xs={12} md={4} className={classes.divButton} >
    <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
    >
        <div>
            <Button variant="contained" color="primary" className={classes.buttons}>
                SOU DOADOR
            </Button>
        </div>
        <div>
            <Button variant="contained" color="primary" className={classes.buttons}>
                SOU ESCOLA
            </Button>
        </div>
        <div>
            <Button variant="contained" color="primary" className={classes.buttons}>
                SOU PAI / RESPONSAVEL
            </Button>
        </div>
        </Box>
    </Grid>
    </Grid>
  );
}
