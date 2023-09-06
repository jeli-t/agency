import { Container, Title, Accordion, createStyles, rem, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';


export const MOCKDATA = [
  {
      question: 'faq_section.question1',
      answer: "faq_section.answer1",
  },
  {
    question: 'faq_section.question2',
    answer: "faq_section.answer2",
  },
  {
    question: 'faq_section.question3',
    answer: "faq_section.answer3",
  },
  {
    question: 'faq_section.question4',
    answer: "faq_section.answer4",
  },
  {
    question: 'faq_section.question5',
    answer: "faq_section.answer5",
  },
];

const useStyles = createStyles((theme) => ({
  wrapper: {
    marginTop: 100,
    minHeight: 650,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Roboto, ${theme.fontFamily}`,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  question: {
    fontFamily: `Roboto, ${theme.fontFamily}`,
    fontSize: theme.fontSizes.xl,
  },

  answer: {
    fontFamily: `Roboto, ${theme.fontFamily}`,
    fontSize: theme.fontSizes.lg,
  },
}));


interface QuestionProps {
  question: React.ReactNode;
  answer: React.ReactNode;
}

export function Question({ question, answer }: QuestionProps) {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <Accordion.Item className={classes.item} value={t(`${question}`)}>
      <Accordion.Control>
        <Text className={classes.question}>
          {t(`${question}`)}
        </Text>
      </Accordion.Control>
      <Accordion.Panel>
        <Text className={classes.answer}>
          {t(`${answer}`)}
        </Text>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export function FaqSection() {
  const { classes } = useStyles();
  const { t } = useTranslation();

  const questions = MOCKDATA.map((feature, index) => <Question {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title order={3} align="center" className={classes.title}>
        {t("faq_section.title")}
      </Title>
      <Accordion variant="separated">
        {questions}
      </Accordion>
    </Container>
  );
}