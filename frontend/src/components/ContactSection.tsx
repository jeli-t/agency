import { createStyles, useMantineTheme, Title, rem, Text, ThemeIcon } from '@mantine/core';
import contact from './../assets/contact.svg'
import { IconBrandInstagram, IconMail, IconBrandFacebook } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const useStyles = createStyles((theme) => ({
    wrapper: {
        height: 'fit',
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
        position: 'relative',
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 80,

        [theme.fn.smallerThan('lg')]: {
            flexDirection: 'column',
            width: '90%',
            margin: 40,
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
            width: '90%',
        },
    },

    ilustration: {
        height: '100%',
        width: '55%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        [theme.fn.smallerThan('lg')]: {
            width: '90%',
        },
    },

    image: {
        width: '120%',
        height: 'auto',

        [theme.fn.smallerThan('lg')]: {
            maxWidth: '845px',
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

    faq: {
        position: 'absolute',
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(16),
        bottom: '-40px',

        [theme.fn.smallerThan('xl')]: {
            display: 'none',
        },
    },
}))

export function ContactSection() {
    const theme = useMantineTheme();
    const { classes } = useStyles();
    const { t } = useTranslation();

    return (
        <div className={classes.wrapper}>
            <div className={classes.hero_section}>
                <div className={classes.ilustration}>
                    <img src={contact} alt='Video consultation' title='Video consultation' loading='lazy' width={845} height={800} className={classes.image} />
                </div>
                <div className={classes.description}>
                    <Title order={2} className={classes.title}>
                        {t("contact_section.title")}
                    </Title>
                    <Text className={classes.text}>
                        {t("contact_section.text")}
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
                <Text className={classes.faq}>
                    {t("contact_section.faq")}
                </Text>
            </div>
        </div>
    )
}