import { useRouter } from 'next/router';
import { Box, Typography } from '@material-ui/core';
import { Form } from '@components';

export default function Login() {
  const router = useRouter();

  const { type } = router.query;

  const onSubmit = () => {
    router.push(`/dashboard/${type}`);
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h1" paragraph>
          Login
        </Typography>

        <Form type={type} onSubmit={onSubmit} />
      </Box>
    </>
  );
}

export const getServerSideProps = ({ req, params }) => {
  const { type } = params;

  if (type !== 'doador' && type !== 'escola' && type !== 'pais')
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };

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
