import { createStyles, useMantineTheme, Header, Group, Burger, Container, rem, Title, useMantineColorScheme, Switch, Drawer, Text, Menu, Button, Divider } from '@mantine/core';
import Image from 'next/image'
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link'
import { IconChevronDown, IconMoonStars, IconSun, IconMenu2 } from '@tabler/icons-react';
import logoLight from './../assets/logoLight.png';
import { useTranslation } from 'next-i18next'


const lngs = {
  en: { nativeName: 'English' },
  pl: { nativeName: 'Polish' },
};


const useStyles = createStyles((theme) => ({
  header: {
    position: 'fixed',
    top: 0,
    backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
    borderBottom: 0,
    margin: 0,
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
    width: '100%',
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
    maxWidth: '25%',
    flexGrow: 1,

    [theme.fn.smallerThan('lg')]: {
      display: 'none',
    },

    [theme.fn.smallerThan('sm')]: {
      display: 'block',
    },
  },

  links: {
    minWidth: '50%',
    display: 'flex',
    justifyContent: 'center',

    [theme.fn.smallerThan('lg')]: {
      justifyContent: 'left',
      minWidth: '75%',
    },

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  buttons: {
    maxWidth: '25%',
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'right',

    [theme.fn.smallerThan('lg')]: {
      display: 'none'
    },

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  responsive_buttons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
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
      marginTop: 12,
    },
  },

  linkLabel: {
    marginRight: rem(5),

    [theme.fn.smallerThan('sm')]: {
      marginRight: rem(0),
    },
  },

  dropdown: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : theme.colors.gray[2],
  },

  language_label: {
    display: 'block',
    width: 100,
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    border: 'none',
    textDecoration: 'none',
    fontSize: theme.fontSizes.lg,
    fontFamily: `Roboto, ${theme.fontFamily}`,
    fontWeight: 500,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : theme.colors.gray[2],
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

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

  buttons_menu: {
    display: 'none',

    [theme.fn.smallerThan('lg')]: {
      display: 'block',
    },

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
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
    // "label": "Home page",
    "label": "header.home",
  },
  {
    "link": "/solutions",
    // "label": "Solutions",
    "label": "header.solutions",
  },
  {
    "link": "/pricing",
    // "label": "Pricing",
    "label": "header.pricing",
  },
  {
    "link": "/blog",
    // "label": "Blog",
    "label": "header.blog",
  },
  {
    "link": "/about",
    // "label": "About",
    "label": "header.about",
  },
  {
    "link": "/contact",
    // "label": "Contact",
    "label": "header.contact",
  },
  {
    "link": "/get-started",
    // "label": "Get started",
    "label": "header.get_started",
  },
];

export function LanguageMenu() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const { t } = useTranslation();

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
      <Menu.Dropdown className={classes.dropdown}>
        <Menu.Item>
          <Link href="/" locale="pl" key={'Polish'} className={classes.language_label}>
            Polish
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/" locale="en" key={'English'} className={classes.language_label}>
            English
          </Link>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export function ButtonsMenu() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <Menu
      transitionProps={{ transition: 'scale-y' }}
      position="top-end"
      width={'auto'}
      withinPortal
    >
      <Menu.Target>
        <Button className={classes.link} style={{margin: 0, padding: 0}} rightIcon={<IconMenu2 size="2rem" stroke={1.5} />} />
      </Menu.Target>
      <Menu.Dropdown className={classes.dropdown}>
        <Text className={classes.language_label} style={{fontSize: theme.fontSizes.xl}}>Language:</Text>
        <Menu.Item>
          <Link href="/" locale="pl" key={'Polish'} className={classes.language_label}>
            Polish
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/" locale="en" key={'English'} className={classes.language_label}>
            English
          </Link>
        </Menu.Item>
        <Divider size='md' color={theme.colors.gray[5]}></Divider>
        <Menu.Item>
          <SwitchToggle />
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export function HeaderMenu() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const { t } = useTranslation();


  const items = mockdata.map((link) => {
    return (
      <Link
        key={link.label}
        href={link.link}
        className={classes.link}
      >
        {t(link.label)}
      </Link>
    );
  });

  return (
    <Header height={56} className={classes.header}>
      <Container size='fluid' className={classes.header_container}>
        <div className={classes.inner}>
          <div className={classes.logo}>
            <Link href='/'>
              <Image src={logoLight} alt="Logo jeli.pl" title='jeli.pl' loading='eager' height='50' width='89' />
            </Link>
          </div>
          <Group spacing={10} className={classes.links}>
            {items}
          </Group>
          <Group className={classes.buttons}>
            <LanguageMenu></LanguageMenu>
            <SwitchToggle />
          </Group>
          <div className={classes.buttons_menu}>
            <ButtonsMenu />
          </div>
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
            <Container size='fluid'>
              <div className={classes.inner}>
                <Link href='/'>
                  <Image src={logoLight} alt="Logo jeli.pl" title='jeli.pl' loading='eager' height='50' width='89'/>
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
            <Divider size='sm' w={'70%'} variant='solid' my='sm' color={theme.colors.gray[5]} />
            <div style={{height: 30, display: 'flex', alignItems: 'center'}}>
              <SwitchToggle />
            </div>
            <Divider size='sm' w={'70%'} variant='solid' my='sm' color={theme.colors.gray[5]} />
            <Text className={classes.link}>Language:</Text>
            <Link href="/" locale="pl" key={'Polish'} className={classes.language_label}>
              Polish
            </Link>
            <Link href="/" locale="en" key={'English'} className={classes.language_label}>
              English
            </Link>
          </div>
        </Drawer>
      </Container>
    </Header>
  );
}