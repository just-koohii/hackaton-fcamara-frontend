import { Typography, Container, useMediaQuery, Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Image from 'next/image';

export default function Home() {
  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down('xs'));

  return (
    <>
      <Image src="/logo.svg" height={mobile ? 300 : 450} width={356} alt="" />

      <Typography align="center" variant="h3" gutterBottom>
        Sobre o Projeto
      </Typography>

      <Container>
        <Typography align="justify" variant="h5" paragraph>
          A compra do material escolar é um assunto complicado para muitas das
          famílias em todo início de ano, pois demanda uma boa parte do
          orçamento doméstico. Considerando famílias de baixa renda então, o
          problema é ainda mais complexo. Pensando nisso, o Projeto Elo busca
          conectar pais e alunos que estudam na rede pública de ensino a
          doadores dispostos a ajudar.
        </Typography>

        <Typography align="justify" variant="h5" paragraph>
          Escola, você pode cadastrar os alunos e a lista do que eles precisam.
          Doador(a), você pode verificar qual escola que necessita de ajuda está
          mais próxima de você, checar as listas de material e contribuir com
          itens de qualquer valor que puder, não é preciso doar uma lista
          completa, além disso, itens seminovos são super bem-vindos!
        </Typography>

        <Box mb={5}>
          <Typography align="justify" variant="h5">
            Comerciante, também pensamos em você! Que tal contribuir na corrente
            e ainda permitir que a sua loja aumente as vendas? Através de
            vantagens, como descontos, podemos listar seu estabelecimento como
            parceiro, assim, os doadores interessados em adquirir itens novos
            serão redirecionados para você
          </Typography>
        </Box>
      </Container>
    </>
  );
}
