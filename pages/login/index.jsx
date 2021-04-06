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
            <img
              src="https://media.istockphoto.com/photos/elearning-online-education-or-internet-encyclopedia-concept-open-and-picture-id1263424631?b=1&k=6&m=1263424631&s=170667a&w=0&h=4VHhpTVLA5BWJVM0UCm8qFo5SikZ1o4hVwuJtonrRW4="
              alt="img 1"
            />
            <img
              src="https://media.istockphoto.com/photos/school-classroom-in-blur-background-without-young-student-blurry-view-picture-id959622488?b=1&k=6&m=959622488&s=170667a&w=0&h=tmEyP4Oo0EcEqXB4qB1QtvhOCfE-dD3vvJhTqqyXaKs="
              alt="gato 2"
            />
            <img
              src="https://media.istockphoto.com/photos/back-to-school-concept-background-picture-id1165403721?b=1&k=6&m=1165403721&s=170667a&w=0&h=SwCAzs_pq8TvjAIctWzejIJNZvoz6gss9rFXOyrMEO4="
              alt="img 3"
            />
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
