import { Link } from 'react-router-dom';
import { createStyles, Title, Text, Button, rem, MantineProvider, useMantineTheme, Image } from '@mantine/core';
import construction from './../assets/construction.svg'
import { Helmet } from 'react-helmet-async';


const useStyles = createStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },

  title: {
    fontFamily: `Roboto, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(60),
    marginTop: 50,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32),
    },
  },

  description: {
    maxWidth: rem(500),
    marginTop: theme.spacing.xl,
  },
}));

export default function UnderConstructionPage() {
  const { classes } = useStyles();
  const mainTheme = useMantineTheme();

  return (
    <>
      <Helmet>
          <title>Construction site | Jeli Digital Agency</title>
          <meta name='description' content='' />
          <meta name="robots" content="Noindex" />
      </Helmet>
      <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
        <div className={classes.root}>
          <Title className={classes.title}>Construction site</Title>
          <Text size="lg" align="center" className={classes.description}>
            This site is still under construction. Good things take time. Come back later!
          </Text>
          <Image src={construction} height={'500px'} width='auto' />
          <Link to='/'>
            <Button color='orange' variant="filled" size="md">
              Take me back to home page
            </Button>
          </Link>
          <Link to='/contact'>
            <Button color='orange' variant="filled" size="md" style={{marginTop: '20px'}}>
              Or contact me now
            </Button>
          </Link>
        </div>
      </MantineProvider>
    </>
  );
}