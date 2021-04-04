import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SignUpCard } from '@components';
import { mdiDolly, mdiSchool, mdiAccountSupervisor } from '@mdi/js';

const navigation = [
  {
    label: 'doador',
    href: 'doador',
    path: mdiDolly,
  },
  {
    label: 'escola',
    href: 'escola',
    path: mdiSchool,
  },
  {
    label: 'pai / responsavel',
    href: 'pais',
    path: mdiAccountSupervisor,
  },
];

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  container: {
    marginTop: spacing(4),
  },
  cardContainer: {
    marginTop: 0,
    [breakpoints.up('sm')]: {
      marginTop: spacing(12),
    },
  },
}));

export default function preLogin() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3">Escolha seu tipo de conta:</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container className={classes.cardContainer} spacing={6}>
            {navigation.map(({ label, path, href }) => (
              <Grid key={label} item xs={12} md={4}>
                <SignUpCard
                  href={`/cadastro/${href}`}
                  path={path}
                  label={label}
                />
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
