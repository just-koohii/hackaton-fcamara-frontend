import { Typography, Container, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Image from 'next/image';

export default function Home() {
  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down('xs'));

  return (
    <>
      <Image src="/logo.svg" height={mobile ? 300 : 500} width={356} alt="" />

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
