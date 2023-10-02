import { createStyles, Title, Text, Container, rem, Button, useMantineTheme } from '@mantine/core';
import { Dots } from '../assets/Dots';
import Link from "next/link";
import trust_us from './../assets/trust_us.svg'
import Image from "next/image";
import { useTranslation } from 'next-i18next';


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
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        marginTop: 80,
        marginBottom: 80,

        [theme.fn.smallerThan('lg')]: {
            flexDirection: 'column',
            width: '90%',
            margin: 0,
            marginBottom: 80,
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
        marginBottom: 10,

        [theme.fn.smallerThan('lg')]: {
            fontSize: rem(20),
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(16),
        },
    },

    button: {
        width: 200,
        marginTop: 20,
        marginRight: 20,
        color: theme.white,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(24),
        fontWeight: 400,
    
        [theme.fn.smallerThan('xs')]: {
            width: 140,
            fontSize: rem(16),
            marginRight: 10,
        },
    },
}))


export function ReportBanner() {
    const theme = useMantineTheme();
    const { classes } = useStyles();
    const { t } = useTranslation();

    return (
        <div className={classes.wrapper}>
            <div className={classes.hero_section}>
                <div className={classes.ilustration}>
                    <Image src={trust_us} alt='Trust us' title='You can trust us' loading='lazy' fill={true} />
                </div>
                <div className={classes.description}>
                    <Title order={2} className={classes.title}>
                        {t("report_banner.title")}
                    </Title>
                    <Text className={classes.text}>
                        {t("report_banner.text")}
                    </Text>
                    <div>
                        <Link href='/contact'>
                            <Button className={classes.button} size='lg' radius='md'>
                                {t("report_banner.button1")}
                            </Button>
                        </Link>
                        <Link href='/blog'>
                            <Button className={classes.button} size='lg' radius='md'>
                                {t("report_banner.button2")}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}