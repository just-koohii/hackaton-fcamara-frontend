import { Container, Grid, Typography, Box } from '@material-ui/core';
import api from '@services/api';
import { StudentCard } from '@components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginBottom: spacing(8),
  },
  emptyList: {
    marginTop: spacing(20),
  },
}));

export default function Pais({ data }) {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.title} align="center" variant="h3">
        Acompanhe o progresso das doações
      </Typography>

      {data.length > 0 ? (
        <Container>
          <Grid container spacing={4}>
            {data.map((item) => (
              <Grid key={item.id} item xs={12} md={4}>
                <StudentCard
                  id={item.id}
                  nome={item.nome}
                  escola={item.alunos_escola.nome}
                  cidade={item.alunos_escola.endereco_escola.cidade}
                  estado={item.alunos_escola.endereco_escola.estado}
                  value={item.id * 10}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <Box className={classes.emptyList}>
          <Typography variant="h4" align="center" color="textSecondary">
            Você não possui filhos vinculados a sua conta.
          </Typography>
          <Typography variant="h4" align="center" color="textSecondary">
            Solicite o cadastro na escola.
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export const getServerSideProps = async ({ req }) => {
  const { token } = req.cookies;

  if (!token)
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };

  const { id } = req.cookies;

  const { data } = await api.get(`listar/pais/${id}/filhos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    props: {
      data,
    },
  };
};
