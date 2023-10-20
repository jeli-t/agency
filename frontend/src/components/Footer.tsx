import { createStyles, Text, Container, ActionIcon, Group, rem, useMantineTheme } from '@mantine/core';
import Image from 'next/image'
import { IconBrandInstagram, IconMail, IconBrandFacebook } from '@tabler/icons-react';
import Link from 'next/link'
import logoDark from './../assets/logoDark.png';
import logoLight from './../assets/logoLight.png';
import { useTranslation } from 'next-i18next';


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
    height: 'auto',
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

  mobile_privacy: {
    display: 'none',

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      display: 'block',
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const { t } = useTranslation();

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <Link href='/' style={{textDecoration: 'none'}}>
          {theme.colorScheme === 'light' ? <Image src={logoDark} alt="Logo jeli.pl" title='jeli.pl' loading='lazy' width='200' height='112' className={classes.logo} /> : <Image src={logoLight} alt="Logo jeli.pl" title='jeli.pl' loading='lazy' width='200' height='112' className={classes.logo} />}
        </Link>
        <div className={classes.groups}>
          <div className={classes.wrapper}>
            <Text className={classes.title}>{t("footer.title1")}</Text>
            <nav>
              <Link href='/' className={classes.link}>
                {t("footer.home")}
              </Link>
              <Link href='/solutions' className={classes.link}>
                {t("footer.solutions")}
              </Link>
              <Link href='/pricing' className={classes.link}>
                {t("footer.pricing")}
              </Link>
              <Link href='/blog' className={classes.link}>
                {t("footer.blog")}
              </Link>
              <Link href='/about' className={classes.link}>
                {t("footer.about")}
              </Link>
              <Link href='/contact' className={classes.link}>
                {t("footer.contact")}
              </Link>
              <Link href='/get-started' className={classes.link}>
                {t("footer.get_started")}
              </Link>
            </nav>
          </div>
          <div className={classes.wrapper}>
            <Text className={classes.title}>{t("footer.title2")}</Text>
            <Link href='/websites' className={classes.link}>
              {t("footer.solution1")}
            </Link>
            <Link href='/search-engine-optimization' className={classes.link}>
              {t("footer.solution2")}
            </Link>
            <Link href='/social-media' className={classes.link}>
              {t("footer.solution3")}
            </Link>
            <Link href='/digital-marketing' className={classes.link}>
              {t("footer.solution4")}
            </Link>
          </div>
          <div className={classes.wrapper}>
            <Text className={classes.title}>{t("footer.title3")}</Text>
            <Link href={t("footer.privacy_link")} className={classes.link}>
              {t("footer.privacy")}
            </Link>
          </div>
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2023 jeli.pl. All rights reserved. Powered by jeli.pl
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <Link href='mailto: agency@jeli.pl'>
            <ActionIcon size="lg">
              <IconMail size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </Link>
          <Link href='https://www.facebook.com/profile.php?id=100095023350168'>
            <ActionIcon size="lg">
              <IconBrandFacebook size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </Link>
          <Link href='https://www.instagram.com/jeli_agency/'>
            <ActionIcon size="lg">
              <IconBrandInstagram size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </Link>
        </Group>
        <div className={classes.mobile_privacy}>
          <Link href={t("footer.privacy_link")} className={classes.link}>
            {t("footer.privacy")}
          </Link>
        </div>
      </Container>
    </footer>
  );
}