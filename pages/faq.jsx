import { Container, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
  question: {
    marginTop: spacing(6),
  },
  divider: {
    margin: `${spacing(6)}px 0`,
  },
}));

const about = [
  {
    question: 'O que é o projeto ELO?',
    answer:
      'Somos uma organização sem fins lucrativos cuja intenção é exclusivamente ajudar crianças que precisam de material escolar. Somos o ELO entre o doador e a criança.',
  },
  {
    question: 'Como e quando surgiu o projeto?',
    answer:
      'A ELO surgiu em 2021 através de um processo de formação de uma grande empresa de tecnologia. Um grupo formado por 4 amigos inciou o projeto dando início a ELO.',
  },
];

const payment = [
  {
    question: 'Quais as formas de pagamento?',
    answer:
      'Ao optar por comprar o material escolar, você será direcionado para um site parceiro e poderá escolher as formas de pagamento disponíveis por eles.',
  },
  {
    question: 'É seguro doar pelo site parceiro?',
    answer:
      'Sim. Todo site parceiro do projeto ELO possui certificações de segurança.',
  },
];

const donate = [
  {
    question: 'Quais materiais posso doar?',
    answer:
      'Ao escolher uma escola, selecione uma criança e verá a lista que essa precisa, selecione os itens que deseja doar e finalize o processo.',
  },
  {
    question: 'A escola aceita somente material novos?',
    answer:
      'Não. A doação pode ser feita com material usado, desde que esteja em bom estado. Todo material doado, será analisado pela direção da escola.',
  },
  {
    question: 'Posso doar roupas, calçados...?',
    answer:
      'Não. Trabalhamos exclusivamente com materiais escolares. Mas claro, você pode escolher algum outro projeto e fazer sua doação. ',
  },
  {
    question: 'Não tenho recursos, posso ajudar o projeto?',
    answer:
      'Sim. Compartilhe nas suas redes sociais e grupos nos aplicativos de mensagens. ',
  },
];

const delivery = [
  {
    question: 'Posso entregar diretamente ao aluno?',
    answer:
      'Não. Todo processo de entrega é feito por intermédio da escola. O material pode ser entregue na escola do aluno ou a escola busca o material na casa do doador.',
  },
  {
    question: 'Terei algum custo para entregar o material?',
    answer:
      'Se optar por entregar na escola, o custo do deslocamento fica por conta do doador. Por isso, damos a opção de escolher a escola com o local mais próximo para você.',
  },
];

export default function Faq() {
  const classes = useStyles();

  return (
    <Container>
      <Typography align="left" variant="h3">
        O projeto
      </Typography>

      {about.map(({ question, answer }) => (
        <>
          <Typography
            className={classes.question}
            align="left"
            variant="h4"
            paragraph
          >
            {question}
          </Typography>

          <Typography align="left" variant="h6" paragraph>
            {answer}
          </Typography>
        </>
      ))}

      <Divider className={classes.divider} />

      <Typography align="left" variant="h3">
        Pagamento
      </Typography>

      {payment.map(({ question, answer }) => (
        <>
          <Typography
            className={classes.question}
            align="left"
            variant="h4"
            paragraph
          >
            {question}
          </Typography>

          <Typography align="left" variant="h6" paragraph>
            {answer}
          </Typography>
        </>
      ))}

      <Divider className={classes.divider} />

      <Typography align="left" variant="h3">
        O que doar
      </Typography>

      {donate.map(({ question, answer }) => (
        <>
          <Typography
            className={classes.question}
            align="left"
            variant="h4"
            paragraph
          >
            {question}
          </Typography>

          <Typography align="left" variant="h6" paragraph>
            {answer}
          </Typography>
        </>
      ))}

      <Divider className={classes.divider} />

      <Typography align="left" variant="h3">
        Entrega
      </Typography>

      {delivery.map(({ question, answer }) => (
        <>
          <Typography
            className={classes.question}
            align="left"
            variant="h4"
            paragraph
          >
            {question}
          </Typography>

          <Typography align="left" variant="h6" paragraph>
            {answer}
          </Typography>
        </>
      ))}
    </Container>
  );
}
