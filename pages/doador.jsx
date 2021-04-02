import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, ButtonBase } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  gridButton: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  buttonBase: {
    position: 'relative',
    height: 200,
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      height: 150,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  center: {
    alignContent: 'center',
    textAlign: 'center',
  },
}));

const images = [
  {
    url:
      'https://wl-incrivel.cf.tsp.li/resize/728x/jpg/f4e/43b/69a8a856e89a899cdad228af45.jpg',
    title: 'Tenho materiais para doar',
  },
  {
    url:
      'https://wl-incrivel.cf.tsp.li/resize/728x/jpg/3f8/54b/ef0aed5a73be5d5bbf9db7dc34.jpg',
    title: 'Quero comprar materiais para doar',
  },
];

export default function Doador() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.center}>
          <Typography variant="h3">
            Olá, Fulano, que bom ter você aqui!
          </Typography>
          <Typography variant="h3">
            Escolha a opção mais adequada à você:
          </Typography>
        </Grid>

        {images.map(({ url, title }) => (
          <Grid item xs={12} md={6} className={classes.gridButton}>
            <ButtonBase
              key={title}
              focusRipple
              className={classes.buttonBase}
              focusVisibleClassName={classes.focusVisible}
            >
              <span
                className={classes.imageSrc}
                style={{ backgroundImage: `url(${url})` }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {title}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          </Grid>
        ))}

        <Grid item xs={12} className={classes.center}>
          <Typography variant="h3">LOGO E NOME DO PROJETO</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
