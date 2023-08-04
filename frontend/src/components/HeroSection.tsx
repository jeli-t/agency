import { Link } from 'react-router-dom';
import { createStyles, useMantineTheme, Title, rem, Text, Button } from '@mantine/core';
import { TypeAnimation } from 'react-type-animation';
import { IconSearch } from '@tabler/icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { useWindowScroll } from '@mantine/hooks';
import logoDark from './../assets/logoDark.png';
import logoLight from './../assets/logoLight.png';
import { HashLink } from 'react-router-hash-link';
import { useTranslation, Trans } from 'react-i18next';


const useStyles = createStyles((theme) => ({
    container: {
        height: '100vh',
        paddingBottom: '5vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: theme.colorScheme === 'dark' ? 'radial-gradient(#ff8700 1.7px, #000000 1.7px)' : 'radial-gradient(#ff8700 1.7px, #ffffff 1.7px)',
        backgroundSize: '40px 40px',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center center',

        [theme.fn.smallerThan('xs')]: {
            backgroundImage: 'none',
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : theme.colors.gray[1],
            paddingBottom: '30vh',
        },
    },

    logo: {
        width: '20rem',
        height: 'auto',
        marginBottom: theme.spacing.lg,

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
            paddingLeft: 10,
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
        margin: 10,
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
            {theme.colorScheme === 'light' ? <img src={logoDark} alt="Logo jeli.pl" title='jeli.pl' loading='eager' width='320' height='180' className={classes.logo} /> : <img src={logoLight} alt="Logo jeli.pl" title='jeli.pl' loading='eager' width='320' height='180' className={classes.logo} />}
            <div className={classes.search_bar}>
                <TypeAnimation
                    sequence={[
                        1000,
                        '',
                        'Websites',
                        2000,
                        '',
                        'Search Engine Optimization',
                        2000,
                        '',
                        'Social media',
                        2000,
                        '',
                        'Digital marketing',
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
                {/* Jeli Digital Agency - Your trusted partner in the digital journey */}
            </Title>
            <Link to='/contact'>
                <Button className={classes.button} size='lg' radius='md'>
                    Contact
                </Button>
            </Link>
            <HashLink to='/#Make-yourself-visible' smooth className={classes.link}>
                <FontAwesomeIcon icon={faAnglesDown} beat className={classes.scroll_icon_desktop} />
                <FontAwesomeIcon icon={faAnglesDown} beat className={classes.scroll_icon_mobile} />
            </HashLink>
        </div>
    )
}