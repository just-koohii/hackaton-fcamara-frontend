import { useState } from 'react';
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Box,
  TableCell,
  TableRow,
  LinearProgress,
} from '@material-ui/core';
import { mdiAccount } from '@mdi/js';
import Icon from '@mdi/react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialsDialog from './components/MaterialsDialog';

const useStyles = makeStyles((theme) => ({
  cardContent: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  progressContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1),
  },
  progresss: {
    width: '100%',
    marginRight: theme.spacing(2),
  },
}));

export function StudentCard({ nome, escola, cidade, estado, value, lists }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const findRequested = (data, id) => {
    const {
      ListaMaterial: { quantidade },
    } = data.find((item) => item.id === id);

    return quantidade;
  };

  return (
    <>
      <Card elevation={3}>
        <CardActionArea onClick={() => setOpen(true)}>
          <CardContent className={classes.cardContent}>
            <Icon className={classes.icon} path={mdiAccount} size={2} />
            <Box display="flex" flex={1} flexDirection="column">
              <Typography variant="body1" align="left">
                {nome.toUpperCase()}
              </Typography>
              <Typography variant="caption" align="left" color="textSecondary">
                {`${escola.toUpperCase()} - ${cidade.toUpperCase()}/${estado.toUpperCase()}`}
              </Typography>
              <Box className={classes.progressContainer}>
                <LinearProgress
                  className={classes.progresss}
                  variant="determinate"
                  value={value}
                />
                <Typography variant="caption" color="textSecondary">
                  {`${value}%`}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
      <MaterialsDialog open={open} onClose={() => setOpen(false)}>
        {lists?.map(
          ({ doado, lista, material }) => {
            const solicitado = findRequested(lista.material, material.id);
            if (solicitado !== 0)
              return (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {material.nome}
                  </TableCell>
                  <TableCell align="center">{solicitado}</TableCell>
                  <TableCell align="center">{doado}</TableCell>
                </TableRow>
              );
            return null;
          }
          // lista.forEach((item) => {
          //   if (item.ano === current) {
          //     // setDonated(donated + doado);
          //     // lista.material.forEach(
          //     //   ({ ListaMaterial }) => setTotal(total + ListaMaterial.quantidade) // (tempTot += ListaMaterial.quantidade)
          //     // );
          //   }
          // }
        )}
      </MaterialsDialog>
    </>
  );
}
