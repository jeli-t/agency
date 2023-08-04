import { createStyles, useMantineTheme, Header, Group, Burger, Container, rem, Title, useMantineColorScheme, Switch, Drawer, Text, Menu, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import { IconChevronDown, IconMoonStars, IconSun } from '@tabler/icons-react';
import { useEffect } from 'react';
import logoLight from './../assets/logoLight.png';
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  pl: { nativeName: 'Polski' },
};


const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
    borderBottom: 0,
  },

  header_container: {
    marginLeft: 70,
    marginRight: 70,

    [theme.fn.smallerThan('lg')]: {
      marginLeft: 0,
      marginRight: 0,
    },
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

  logo: {
    height: 50,
    width: 'auto',

    [theme.fn.smallerThan('lg')]: {
      display: 'none',
    },

    [theme.fn.smallerThan('sm')]: {
      display: 'block',
    },
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

  responsive_buttons: {
    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
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
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
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

  language_label: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.white,
    fontSize: theme.fontSizes.lg,
    fontWeight: 500,
    backgroundColor: theme.primaryColor,

    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        0.1
      ),
    },

    [theme.fn.smallerThan('sm')]: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontSize: rem(25),
      marginTop: 25,
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
    "link": "/",
    "label": "Home page",
  },
  {
    "link": "/solutions",
    "label": "Solutions",
  },
  {
    "link": "/pricing",
    "label": "Pricing",
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
  },
  {
    "link": "/get-started",
    "label": "Get started",
  },
];

export function LanguageMenu() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const { t, i18n } = useTranslation();

  return (
    <Menu
      transitionProps={{ transition: 'scale-y' }}
      position="top-end"
      width={'auto'}
      withinPortal
    >
      <Menu.Target>
        <Button className={classes.link} style={{padding: `${rem(0)} ${rem(12)}`}} rightIcon={<IconChevronDown size="1.05rem" stroke={1.5} />} pr={12}>
          Language
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
          {Object.keys(lngs).map((lng) => (
            <Menu.Item>
              <button key={lng} className={classes.language_label} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                {/* {lngs[lng].nativeName} */}
                asdf
              </button>
            </Menu.Item>
          ))}
      </Menu.Dropdown>
    </Menu>
  );
}


export function HeaderMenu() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const { t, i18n } = useTranslation();

  const location = useLocation();
  useEffect(() => {
    close();
  }, [location])

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
      <Container size='fluid' className={classes.header_container}>
        <div className={classes.inner}>
          <Link to='/' style={{textDecoration: 'none'}}>
            <img src={logoLight} alt="Logo jeli.pl" title='jeli.pl' loading='eager' height='50' width='89' className={classes.logo} />
          </Link>
          <Group spacing={10} className={classes.links}>
            {items}
          </Group>
          <Group className={classes.buttons}>
            <LanguageMenu></LanguageMenu>
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
                  <img src={logoLight} alt="Logo jeli.pl" title='jeli.pl' loading='eager' height='50' width='89' className={classes.logo} />
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
          <Group className={classes.responsive_buttons}>
            <SwitchToggle />
            <div>
              {Object.keys(lngs).map((lng) => (
                <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                  {/* {lngs[lng].nativeName} */}
                </button>
              ))}
            </div>
          </Group>
        </Drawer>
      </Container>
    </Header>
  );
}