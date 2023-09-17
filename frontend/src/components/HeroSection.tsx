import Link from "next/link";
import { createStyles, useMantineTheme, Title, rem, Text, Button } from '@mantine/core';
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { IconSearch } from '@tabler/icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { useWindowScroll } from '@mantine/hooks';
import logoDark from './../assets/logoDark.png';
import logoLight from './../assets/logoLight.png';
import { useTranslation } from 'next-i18next'


const useStyles = createStyles((theme) => ({
    container: {
        height: '100vh',
        paddingBottom: '5vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: theme.colorScheme === 'dark' ? 'radial-gradient(#ff8700 1px, #000000 1px)' : 'radial-gradient(#ff8700 1px, #ffffff 1px)',
        backgroundSize: '40px 40px',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center center',

        [theme.fn.smallerThan('xs')]: {
            paddingBottom: '30vh',
        },
    },

    logo: {
        width: '30rem',
        height: 'auto',

        [theme.fn.smallerThan('xs')]: {
            width: '15rem',
        },
      },

    hero_title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(24),
        fontWeight: 600,
        padding: 5,
        marginTop: 20,
        backgroundColor: theme.colorScheme === 'dark' ? theme.black : theme.white,
        maxWidth: '90%',
        textAlign: 'center',

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(20),
            backgroundColor: 'transparent',
        },
    },

    search_bar: {
        display: 'block',
        position: 'relative',
        margin: 10,
        width: 700,
        maxWidth: '90%',
        padding: 10,
        paddingLeft: 30,
        border: '4px solid',
        borderRadius: theme.radius.xl,
        borderColor: theme.black,
        backgroundColor: theme.white,
        color: theme.black,

        [theme.fn.smallerThan('xs')]: {
            paddingLeft: 20,
            border: '2px solid',
        },
    },

    search_icon: {
        position: 'absolute',
        right: 30,
        color: theme.black,

        [theme.fn.smallerThan('xs')]: {
            top: 5,
            right: 10,
        },
    },

    scroll_icon_desktop: {
        height: 50,
        color: theme.colors.orange[8],
        cursor: 'pointer',

        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    scroll_icon_mobile: {
        display: 'none',

        [theme.fn.smallerThan('xs')]: {
            display: 'block',
            height: 40,
            color: theme.colors.orange[8],
            cursor: 'pointer',
        },
    },

    type_animation: {
        display: 'inline-block',
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(30),
        lineHeight: 1,
        fontWeight: 400,
    
        [theme.fn.smallerThan('xs')]: {
          fontSize: rem(20),
        },
    },

    button: {
        marginTop: 20,
        color: theme.white,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(24),
        fontWeight: 600,

        [theme.fn.smallerThan('xs')]: {
          fontSize: rem(16),
        },
    },

    link: {
        position: 'absolute',
        bottom: 80,
    },
}))

export function HeroSection() {
    const theme = useMantineTheme();
    const { classes } = useStyles();
    const { t } = useTranslation();

    const [scroll, scrollTo] = useWindowScroll();

    return (
        <div className={classes.container}>
            {theme.colorScheme === 'light' ? <Image src={logoDark} alt="Logo jeli.pl" title='jeli.pl' loading='eager' width='320' height='180' className={classes.logo} /> : <Image src={logoLight} alt="Logo jeli.pl" title='jeli.pl' loading='eager' width='320' height='180' className={classes.logo} />}
            <div className={classes.search_bar}>
                <TypeAnimation
                    sequence={[
                        1000,
                        '',
                        // 'Websites',
                        t("hero.search1"),
                        2000,
                        '',
                        // 'Search Engine Optimization',
                        t("hero.search2"),
                        2000,
                        '',
                        // 'Social media',
                        t("hero.search3"),
                        2000,
                        '',
                        // 'Digital marketing',
                        t("hero.search4"),
                        1000,
                    ]}
                    wrapper="span"
                    className={classes.type_animation}
                    repeat={Infinity}
                />
                <IconSearch className={classes.search_icon} size="2rem" stroke={3} />
            </div>
            <Title className={classes.hero_title}>
                {t("hero.title")}
            </Title>
            <Link href='/contact'>
                <Button className={classes.button} size='lg' radius='md'>
                    {t("hero.button")}
                </Button>
            </Link>
            <Link href='/#Make-yourself-visible'  className={classes.link}>
                <FontAwesomeIcon icon={faAnglesDown} beat className={classes.scroll_icon_desktop} />
                <FontAwesomeIcon icon={faAnglesDown} beat className={classes.scroll_icon_mobile} />
            </Link>
        </div>
    )
}