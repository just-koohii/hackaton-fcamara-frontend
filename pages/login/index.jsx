import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LinkButton } from '@components';
import Carousel from 'react-img-carousel';
import 'react-img-carousel/lib/carousel.css';

const navigation = [
  {
    label: 'doador',
    href: 'doador',
  },
  {
    label: 'escola',
    href: 'escola',
  },
  {
    label: 'pai / responsavel',
    href: 'pais',
  },
];

const useStyles = makeStyles(({ spacing }) => ({
  buttons: {
    padding: spacing(2),
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
            {navigation.map(({ label, href }) => (
              <Grid key={label} item xs={12} className={classes.gridButton}>
                <LinkButton
                  variant="contained"
                  color="primary"
                  className={classes.buttons}
                  href={`/login/${href}`}
                >
                  {`sou ${label}`}
                </LinkButton>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export const getServerSideProps = ({ req }) => {
  const { cookies } = req;

  if (cookies.token)
    return {
      redirect: {
        permanent: false,
        destination: `/dashboard/${cookies.type}`,
      },
    };
  return { props: {} };
};
