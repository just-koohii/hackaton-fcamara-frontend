import { useRouter } from 'next/router';
import { Box, Typography } from '@material-ui/core';
import { Form } from '@components';

export default function Login() {
  const {
    query: { type },
  } = useRouter();

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h1" paragraph>
          Login - {type}
        </Typography>

        <Form />
      </Box>
    </>
  );
}

export const getServerSideProps = ({ params: { type } }) => {
  if (type !== 'doador' && type !== 'escola' && type !== 'pais')
    return {
      redirect: {
        permanent: true,
        destination: '/login',
      },
    };

  return { props: {} };
};
