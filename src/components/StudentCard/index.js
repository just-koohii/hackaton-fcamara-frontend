import { useState } from 'react';
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Box,
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

export function StudentCard({ nome, escola, cidade, estado, value }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

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
      <MaterialsDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
