import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Box,
} from '@material-ui/core';
import { mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, spacing }) => ({
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
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

export default function ListCard({ mode = 'info', onClick, ano }) {
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
            <Box display="flex" flex={1} flexDirection="column">
              <Typography variant="h5" align="center">
                <strong>{ano}</strong>
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
