import { useState, useEffect } from 'react';
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
  const [total, setTotal] = useState(0);
  const [donated, setDonated] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    const current = new Date().getFullYear();

    data?.map((item) =>
      item.listas.forEach(({ doado, lista }) => {
        if (lista.ano === current) {
          setDonated(donated + doado);
          lista.material.forEach(
            ({ ListaMaterial }) => setTotal(total + ListaMaterial.quantidade) // (tempTot += ListaMaterial.quantidade)
          );
        }
      })
    );
  }, []);

  return (
    <Box className={classes.container}>
      <Typography className={classes.title} align="center" variant="h3">
        Acompanhe o progresso das doações
      </Typography>

      {data.length > 0 ? (
        <Container>
          <Grid container spacing={4}>
            {data?.map((item) => {
              return (
                <Grid key={item.id} item xs={12} md={4}>
                  <StudentCard
                    id={item.id}
                    nome={item.nome}
                    escola={item.escola.nome}
                    cidade={item.escola.endereco.cidade}
                    estado={item.escola.endereco.estado}
                    lists={item.listas}
                    value={
                      total === 0 ? 0 : ((donated / total) * 100).toFixed(1)
                    }
                  />
                </Grid>
              );
            })}
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
