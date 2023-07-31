import { createStyles, Title, Text, Button, Container, rem } from '@mantine/core';
import { Dots } from '../assets/Dots';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    marginTop: rem(80),
    marginBottom: rem(80),

    [theme.fn.smallerThan('sm')]: {
      marginTop: rem(60),
      marginBottom: rem(60),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  dots: {
    position: 'absolute',
    color: theme.colorScheme === 'dark' ? theme.colors.gray[6] : theme.colors.gray[3],

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: 'left',
    fontWeight: 800,
    fontSize: rem(40),
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Roboto, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  description: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Roboto, ${theme.fontFamily}`,
    fontSize: rem(24),
    fontWeight: 500,
    textAlign: 'left',

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(20),
      textAlign: 'left',
    },
  },
}));

export function WebsitesBanner() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Container p={0} size={800}>
          <Title order={1} className={classes.title}>
            Why the website is so important?
          </Title>
          <Text className={classes.description}>
            In today's digital age, the vast majority of consumers search for products, services, and information online. Without a website, your business may be virtually invisible to potential customers. Having a website allows you to establish an online presence, making it easier for people to find and learn about your business. A well-designed and professional website can significantly boost your business's credibility and trustworthiness. Having a website is the foundation of digital marketing.
          </Text>
        </Container>
      </div>
    </Container>
  );
}