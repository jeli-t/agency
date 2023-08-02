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

export function PricingBanner() {
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
            Our Pricing Guide
          </Title>
          <Text className={classes.description}>
            First of all, every project is different, and the scope of services may vary depending on your marketing goals and the type of business. We price each project separately. The following prices are for reference only.
          </Text>
          <Text className={classes.description}>
            If you would like to receive a <span style={{fontWeight: 700}}>free</span> personalized pricing and strategy for your business, check out the Get started section or contact us directly to schedule a <span style={{fontWeight: 700}}>free</span> video consultation.
          </Text>
        </Container>
      </div>
    </Container>
  );
}