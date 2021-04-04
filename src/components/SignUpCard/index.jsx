import {
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import Icon from '@mdi/react';
import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  actionArea: {
    borderRadius: theme.spacing(2),
    transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: theme.shadows[4],
    },
  },
  card: {
    minWidth: 256,
    borderRadius: 16,
  },
  cardMedia: {
    display: 'flex',
    justifyContent: 'center',
    padding: `${theme.spacing(6)}px 0`,
  },
  icon: {
    color: theme.palette.primary.light,
  },
  content: {
    backgroundColor: theme.palette.primary.main,
    padding: '1rem 1.5rem 1.5rem',
  },
  title: {
    ...theme.typography.button,
    fontSize: theme.typography.h5.fontSize,
    color: theme.palette.primary.contrastText,
  },
}));

export function SignUpCard({ label, path, href }) {
  const classes = useStyles();

  return (
    <Link href={href}>
      <CardActionArea className={classes.actionArea}>
        <Card elevation={3} className={classes.card}>
          <CardMedia className={classes.cardMedia}>
            <Icon path={path} size={4} className={classes.icon} />
          </CardMedia>
          <CardContent className={classes.content}>
            <Typography className={classes.title} align="center">
              {label}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Link>
  );
}
