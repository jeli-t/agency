import { createStyles, Text, Container, ActionIcon, Group, rem, useMantineTheme } from '@mantine/core';
import { IconBrandInstagram, IconMail, IconBrandFacebook } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import logoDark from './../assets/logoDark.png';
import logoLight from './../assets/logoLight.png';


const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: rem(200),
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Roboto, ${theme.fontFamily}`,
    fontSize: rem(40),
    fontWeight: 700,
    margin: 10,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(30),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },


  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();
  const theme = useMantineTheme();


  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <Link to='/' style={{textDecoration: 'none'}}>
          {/* <div className={classes.logo}>
            jeli.pl
          </div> */}
          {theme.colorScheme === 'light' ? <img src={logoDark} className={classes.logo} /> : <img src={logoLight} className={classes.logo} />}
        </Link>
        <div className={classes.groups}>
          <div className={classes.wrapper}>
            <Text className={classes.title}>{'Navigation'}</Text>
            <Link to='/' className={classes.link}>
              Main page
            </Link>
            <Link to='/get_started' className={classes.link}>
              Get started
            </Link>
            <Link to='/portfolio' className={classes.link}>
              Portfolio
            </Link>
            <Link to='/about' className={classes.link}>
              About
            </Link>
            <Link to='/contact' className={classes.link}>
              Contact
            </Link>
          </div>
          <div className={classes.wrapper}>
            <Text className={classes.title}>{'Solutions'}</Text>
            <Link to='/solutions/websites' className={classes.link}>
              Websites
            </Link>
            <Link to='/solutions/seo' className={classes.link}>
              SEO
            </Link>
            <Link to='/solutions/social_media' className={classes.link}>
              Social media
            </Link>
            <Link to='/solutions/digital_marketing' className={classes.link}>
              Digital marketing
            </Link>
          </div>
          <div className={classes.wrapper}>
            <Text className={classes.title}>{'Other'}</Text>
            <Link to='/privacy' className={classes.link}>
              Privacy
            </Link>
          </div>
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2023 jeli.pl. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <a href='mailto: agency@jeli.pl'>
            <ActionIcon size="lg">
              <IconMail size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </a>
          <a href='https://www.facebook.com/profile.php?id=100095023350168'>
            <ActionIcon size="lg">
              <IconBrandFacebook size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </a>
          <a href='https://www.instagram.com/jeli_agency/'>
            <ActionIcon size="lg">
              <IconBrandInstagram size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </a>
        </Group>
      </Container>
    </footer>
  );
}