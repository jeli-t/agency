import { createStyles, useMantineTheme, Title, rem, Text, ThemeIcon, Button } from '@mantine/core';
import contact from './../assets/contact.svg'
import Image from 'next/image';
import { IconWorldWww } from '@tabler/icons-react';
import { useTranslation } from 'next-i18next';


const useStyles = createStyles((theme) => ({
    wrapper: {
        height: 'fit',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'hidden',

        [theme.fn.smallerThan('xs')]: {
            justifyContent: 'flex-start',
        }
    },

    hero_section: {
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        marginTop: 60,

        [theme.fn.smallerThan('lg')]: {
            flexDirection: 'column',
            width: '90%',
            margin: 0,
        },
    },

    description: {
        height: '100%',
        width: '42%',
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
            marginTop: -20,
        },
    },

    ilustration: {
        height: '700px',
        width: '58%',
        position: "relative",

        [theme.fn.smallerThan('lg')]: {
            width: '50%',
            height: '300px',
        },

        [theme.fn.smallerThan('xs')]: {
            width: '120%',
            marginTop: '40px',
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
        fontSize: rem(20),
        fontWeight: 400,

        [theme.fn.smallerThan('lg')]: {
            fontSize: rem(20),
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(16),
        },
    },

    icon: {
        marginRight: 20,

        '&:hover': {
            transform: 'scale(1.1)',
        },
    },

    contact_info: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(24),
        fontWeight: 400,
        display: 'inline-flex',
        marginLeft: 10,

        [theme.fn.smallerThan('lg')]: {
            fontSize: rem(20),
        },
    
        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(20),
        },
    },

    button: {
        color: theme.white,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(30),
        fontWeight: 400,
        backgroundImage: 'linear-gradient(133deg, #fd7e14 0%, #fa5252 100%)',
        transition: '0.2s',
        opacity: 1,

        '&:hover': {
            opacity: 0.7,
        },
    
        [theme.fn.smallerThan('xs')]: {
          fontSize: rem(24),
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
                    <Image src={contact} alt="Video consultation" fill={true} />
                </div>
                <div className={classes.description}>
                    <Title order={2} className={classes.title}>
                        {t("contact_section.title")}
                    </Title>
                    <Text className={classes.text}>
                        {t("contact_section.text")}
                    </Text>
                    <div style={{marginTop: '40px'}}>
                        <a href='https://www.jeli.pl'>
                            <Button className={classes.button} size='lg' radius='md'>
                                <IconWorldWww size="1.5rem" stroke={2} />
                                <Text className={classes.contact_info} ml={20}>
                                    jeli.pl
                                </Text>
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}