import { createStyles, useMantineTheme, Title, rem, Text, ThemeIcon, Button } from '@mantine/core';
import { IconWorldWww } from '@tabler/icons-react';
import remote_work from './../assets/remote_work.svg'
import Image from "next/image";
import { useTranslation } from 'next-i18next';


const useStyles = createStyles((theme) => ({
    wrapper: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'hidden',

        [theme.fn.smallerThan('xs')]: {
            height: 'fit',
            justifyContent: 'flex-start',
        }
    },

    hero_section: {
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        marginTop: 80,

        [theme.fn.smallerThan('lg')]: {
            flexDirection: 'column-reverse',
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
        fontSize: rem(24),
        fontWeight: 400,

        [theme.fn.smallerThan('lg')]: {
            fontSize: rem(20),
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(16),
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

export function AboutUs() {
    const theme = useMantineTheme();
    const { classes } = useStyles();
    const { t } = useTranslation();

    return (
        <div className={classes.wrapper}>
            <div className={classes.hero_section}>
                <div className={classes.description}>
                    <Title className={classes.title}>
                        {t("about_us.title")}
                    </Title>
                    <Text className={classes.text}>
                        {t("about_us.text")}
                    </Text>
                    <div>
                        <div style={{marginTop: '40px'}}>
                            <a href='https://www.jeli.pl'>
                                <Button className={classes.button} size='lg' radius='md'>
                                    <IconWorldWww size="1.5rem" stroke={2} />
                                    <Text ml={20}>
                                        jeli.pl
                                    </Text>
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={classes.ilustration}>
                    <Image src={remote_work} alt='Our team' title='Our team' loading='lazy' fill={true} />
                </div>
            </div>
        </div>
    )
}