import { createStyles, Title, Text, Button, Container, Group, rem, MantineProvider, useMantineTheme } from '@mantine/core';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(220),
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(120),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(38),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32),
    },
  },

  description: {
    maxWidth: rem(500),
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },
}));

export default function NotFoundPage() {
  const { classes } = useStyles();
  const mainTheme = useMantineTheme();

  return (
    <>
      <Helmet>
          <title>Jeli Digital Agency | Websites | SEO | Social media</title>
          <meta name='description' content='404' />
          <meta name="robots" content="Noindex" />
      </Helmet>
      <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
        <Container className={classes.root}>
          <div className={classes.label}>404</div>
          <Title className={classes.title}>You have found a secret place.</Title>
          <Text color="dimmed" size="lg" align="center" className={classes.description}>
            Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
            been moved to another URL.
          </Text>
          <Group position="center">
            <Link to='/'>
              <Button color='orange' variant="light" size="md">
                Take me back to home page
              </Button>
            </Link>
          </Group>
        </Container>
      </MantineProvider>
    </>
  );
}