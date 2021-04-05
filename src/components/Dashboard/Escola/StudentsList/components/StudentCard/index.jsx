import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Box,
} from '@material-ui/core';
import { mdiPlus, mdiAccount } from '@mdi/js';
import Icon from '@mdi/react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, spacing }) => ({
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addContent: {
    backgroundColor: palette.primary.dark,
  },
  addIcon: {
    color: palette.primary.contrastText,
  },
  infoIcon: {
    marginRight: spacing(1),
  },
}));

export default function StudentCard({ mode = 'info', onClick, nome }) {
  const classes = useStyles();

  if (mode === 'add')
    return (
      <>
        <Card elevation={3}>
          <CardActionArea onClick={onClick}>
            <CardContent className={[classes.cardContent, classes.addContent]}>
              <Icon className={classes.addIcon} path={mdiPlus} size={2} />
            </CardContent>
          </CardActionArea>
        </Card>
      </>
    );

  return (
    <>
      <Card elevation={3}>
        <CardActionArea onClick={onClick}>
          <CardContent className={classes.cardContent}>
            <Icon className={classes.infoIcon} path={mdiAccount} size={2} />
            <Box display="flex" flex={1} flexDirection="column">
              <Typography variant="body1" align="left">
                {nome.toUpperCase()}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
