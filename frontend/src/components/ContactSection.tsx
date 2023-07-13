import { Link } from 'react-router-dom';
import { createStyles, useMantineTheme, Title, rem, Text, ThemeIcon, ActionIcon } from '@mantine/core';
import contact from './../assets/contact.svg'
import { IconBrandInstagram, IconMail, IconBrandFacebook } from '@tabler/icons-react';



const useStyles = createStyles((theme) => ({
    wrapper: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        [theme.fn.smallerThan('xs')]: {
            justifyContent: 'flex-start',
        }
    },

    hero_section: {
        height: '800px',
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 80,

        [theme.fn.smallerThan('lg')]: {
            width: '100%',
        },

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
            width: '90%',
            margin: 0,
        },
    },

    description: {
        height: '100%',
        width: '45%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'left',

        [theme.fn.smallerThan('lg')]: {
            width: '50%',
            margin: 10,
        },

        [theme.fn.smallerThan('xs')]: {
            width: '100%',
            height: 'auto',
        },
    },

    ilustration: {
        height: '90%',
        width: '55%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',

        [theme.fn.smallerThan('lg')]: {
            width: '50%',
            margin: 10,
        },

        [theme.fn.smallerThan('xs')]: {
            height: '300px',
            width: '100%',
            backgroundSize: '160%',
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(40),
        fontWeight: 600,
        marginBottom: 10,

        [theme.fn.smallerThan('lg')]: {
            fontSize: rem(30),
        },
    
        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(24),
        },
    },

    text: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(24),
        fontWeight: 600,

        [theme.fn.smallerThan('lg')]: {
            fontSize: rem(20),
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(16),
        },
    },

    contact_info: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(30),
        fontWeight: 500,
        display: 'inline-flex',
        marginLeft: 10,

        [theme.fn.smallerThan('lg')]: {
            fontSize: rem(30),
        },
    
        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(24),
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
}))

export function ContactSection() {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.hero_section}>
                <div className={classes.ilustration} style={{backgroundImage: `url(${contact})`}}></div>
                <div className={classes.description}>
                    <Title className={classes.title}>
                        We work remotely
                    </Title>
                    <Text className={classes.text}>
                        Please contact us via email or social media. For more complex projects, we can arrange a video conference to discuss the details. Please check FAQ section below.
                    </Text>
                    <div style={{marginTop: '40px'}}>
                        <a href='mailto: agency@jeli.pl'>
                            <ThemeIcon
                                size={50}
                                radius="md"
                                variant="gradient"
                                gradient={{ deg: 133, from: 'orange', to: 'red' }}
                            >
                                <IconMail size="2rem" stroke={2} />
                            </ThemeIcon>
                            <Text className={classes.contact_info}>
                                agency@jeli.pl
                            </Text>
                        </a>
                    </div>
                    <div style={{marginTop: '40px'}}>
                        <a href='https://www.instagram.com/jeli_agency/'>
                            <ThemeIcon
                                size={50}
                                radius="md"
                                variant="gradient"
                                gradient={{ deg: 133, from: 'orange', to: 'red' }}
                            >
                                <IconBrandInstagram size="2rem" stroke={2} />
                            </ThemeIcon>
                            <Text className={classes.contact_info}>
                                jeli_agency
                            </Text>
                        </a>
                    </div>
                    <div style={{marginTop: '40px'}}>
                        <a href='https://www.facebook.com/profile.php?id=100095023350168'>
                            <ThemeIcon
                                size={50}
                                radius="md"
                                variant="gradient"
                                gradient={{ deg: 133, from: 'orange', to: 'red' }}
                            >
                                <IconBrandFacebook size="2rem" stroke={2} />
                            </ThemeIcon>
                            <Text className={classes.contact_info}>
                                Jeli Agency
                            </Text>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}