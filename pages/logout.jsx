import { useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@material-ui/core';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Cookie from 'js-cookie';

const useStyles = makeStyles(({ spacing }) => ({
  box: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress: {
    marginTop: spacing(8),
  },
}));

export default function Logout() {
  const router = useRouter();
  const classes = useStyles();

  const clearCookies = () => {
    const cookies = Cookie.get();

    if (cookies) {
      Object.keys(cookies).forEach((key) => {
        Cookie.remove(key);
      });
    }

    router.replace('/');
  };

  useEffect(clearCookies, []);

  return (
    <Box className={classes.box}>
      <Typography align="center" variant="h2">
        Por favor aguarde um pouco
      </Typography>

      <CircularProgress className={classes.progress} size={76} />
    </Box>
  );
}
