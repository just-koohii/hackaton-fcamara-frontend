// import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import api from '@services/api';

// const useStyles = makeStyles((theme) => ({}));

export default function Doador({ user }) {
  //  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography align="center" variant="h3">
            Olá, {user.nome}, que bom ter você aqui!
          </Typography>
          <Typography align="center" variant="h3">
            Seus dados:
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <List>
            {Object.keys(user).map((key) => {
              if (key !== 'id_endereco' && key !== 'endereco_escola')
                return (
                  <ListItem key={key}>
                    <ListItemText
                      primary={key.toUpperCase()}
                      secondary={user[key]}
                    />
                  </ListItem>
                );

              return null;
            })}
          </List>
          <Divider />
          <Typography variant="h4" paragraph>
            Endereço
          </Typography>
          <List>
            {Object.keys(user.endereco_escola).map((key) => {
              return (
                <ListItem key={key}>
                  <ListItemText
                    primary={key.toUpperCase()}
                    secondary={user.endereco_escola[key]}
                  />
                </ListItem>
              );
            })}
          </List>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" variant="h3">
            LOGO E NOME DO PROJETO
          </Typography>
        </Grid>
      </Grid>
    </Container>
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

  const { data } = await api.get(`perfil/escola/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    props: {
      user: data,
    },
  };
};
