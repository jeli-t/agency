import { createStyles, useMantineTheme, Header, Group, Burger, Container, rem, Title, useMantineColorScheme, Switch, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import { IconMoonStars, IconSun } from '@tabler/icons-react';


const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
    borderBottom: 0,
  },

  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    color: theme.white,
    fontFamily: `Roboto, ${theme.fontFamily}`,
    textDecoration: 'none',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  buttons: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.white,
    fontSize: theme.fontSizes.lg,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        0.1
      ),
    },

    [theme.fn.smallerThan('sm')]: {
      color: theme.black,
      fontSize: rem(25),
      marginTop: 25,
    },
  },

  linkLabel: {
    marginRight: rem(5),

    [theme.fn.smallerThan('sm')]: {
      marginRight: rem(0),
    },
  },

  responsive_menu: {
    marginTop: 56,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

export function SwitchToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Group position="center" my={30}>
      <Switch
        checked={colorScheme === 'dark'}
        onChange={() => toggleColorScheme()}
        size="lg"
        color='gray'
        onLabel={<IconSun color={theme.white} size="1.25rem" stroke={1.5} />}
        offLabel={<IconMoonStars color={theme.colors.gray[6]} size="1.25rem" stroke={1.5} />}
      />
    </Group>
  );
}

const mockdata = [
    {
        "link": "/portfolio",
        "label": "Portfolio",
    },
    {
        "link": "/blog",
        "label": "Blog",
    },
    {
        "link": "/about",
        "label": "About",
    },
    {
        "link": "/contact",
        "label": "Contact",
    }
];

export function HeaderMenu() {
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = mockdata.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.link}
        className={classes.link}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <Header height={56} className={classes.header} mb={120}>
      <Container>
        <div className={classes.inner}>
          <Link to='/' style={{textDecoration: 'none'}}>
            <Title className={classes.title}>
              jeli.pl
            </Title>
          </Link>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Group className={classes.buttons}>
            <SwitchToggle />
          </Group>
          <Burger
            opened={opened}
            onClick={open}
            className={classes.burger}
            size="sm"
            color="#fff"
          />
        </div>
        <Drawer opened={opened} onClose={close} size="100%" position='top' withCloseButton={false} transitionProps={{ transition: 'fade', duration: 150, timingFunction: 'easy' }}>
          <Header height={56} className={classes.header} mb={120}>
            <Container>
              <div className={classes.inner}>
                <Link to='/' style={{textDecoration: 'none'}}>
                  <Title className={classes.title}>
                    jeli.pl
                  </Title>
                </Link>
                <Burger
                  opened={opened}
                  onClick={close}
                  className={classes.burger}
                  size="sm"
                  color="#fff"
                />
              </div>
            </Container>
          </Header>
          <div className={classes.responsive_menu}>
            {items}
          </div>
        </Drawer>
      </Container>
    </Header>
  );
}