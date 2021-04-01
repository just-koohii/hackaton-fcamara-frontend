import { Typography, Container } from '@material-ui/core';

export default function Home() {
  return (
    <>
      <Typography align="center" variant="h1" gutterBottom>
        Projeto FC
      </Typography>

      <Typography align="center" variant="h3" gutterBottom>
        Sobre o Projeto
      </Typography>

      <Container>
        <Typography align="justify" variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          vulputate est at felis gravida, eget lobortis neque ultricies. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Pellentesque nec dolor rutrum, tincidunt est eget,
          rutrum nunc. Donec commodo id leo sit amet scelerisque. Praesent et
          elit nunc. Aenean ornare ante id mi venenatis aliquet. Pellentesque
          convallis pulvinar ex. Nam tellus felis, auctor sit amet porttitor id,
          faucibus in tortor. Curabitur mattis metus ipsum, nec aliquam magna
          interdum ut. Maecenas facilisis justo lectus, at lacinia neque
          sagittis id. Duis in gravida felis, a ornare lectus. Fusce sit amet
          imperdiet nulla, at scelerisque eros. Curabitur tempus pharetra
          lobortis.
        </Typography>
      </Container>
    </>
  );
}
