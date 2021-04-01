import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Carousel from 'react-img-carousel';
import { Container, Grid, Typography } from '@material-ui/core';

require('react-img-carousel/lib/carousel.css');

const useStyles = makeStyles((theme) => ({
  buttons: {
    padding: theme.spacing(2),
    alignSelf: 'center',
  },
  buttonGrid: {
    height: '100%',
  },
  gridButton: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function preLogin() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.divHeader}>
          <Typography variant="h3">LOGO E NOME DO PROJETO</Typography>
        </Grid>
        <Grid item xs={12} md={8} className={classes.divImages}>
          <Carousel
            viewportWidth="100%"
            cellPadding={0}
            transitionDuration="2000"
            autoplay
            draggable
            pauseOnHover
          >
            <img src="https://placekitten.com/200/300" alt="gato 1" />
            <img src="https://placekitten.com/300/300" alt="gato 2" />
            <img src="https://placekitten.com/400/300" alt="gato 3" />
          </Carousel>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={3} className={classes.buttonGrid}>
            <Grid item xs={12} className={classes.gridButton}>
              <Button
                variant="contained"
                color="primary"
                className={classes.buttons}
              >
                SOU DOADOR
              </Button>
            </Grid>
            <Grid item xs={12} className={classes.gridButton}>
              <Button
                variant="contained"
                color="primary"
                className={classes.buttons}
              >
                SOU ESCOLA
              </Button>
            </Grid>
            <Grid item xs={12} className={classes.gridButton}>
              <Button
                variant="contained"
                color="primary"
                className={classes.buttons}
              >
                SOU PAI / RESPONSAVEL
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
