import Link from 'next/link'
import { createStyles, useMantineTheme, Title, rem, Text, Button } from '@mantine/core';
import report from './../assets/report.svg';
import { useTranslation } from 'next-i18next';


const useStyles = createStyles((theme) => ({
    container: {
        height: 'fit',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : '#f0f0f0',
        padding: 100,

        [theme.fn.smallerThan('xs')]: {
            height: 'auto',
            padding: 20,
            paddingTop: 50,
            paddingBottom: 50,
        },
    },

    title: {
        textAlign: 'center',
        fontWeight: 800,
        fontSize: rem(40),
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        marginBottom: theme.spacing.xs,
        fontFamily: `Roboto, ${theme.fontFamily}`,
    
        [theme.fn.smallerThan('xs')]: {
          fontSize: rem(28),
          textAlign: 'left',
        },
      },

    text: {
        marginTop: 20,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(34),
        fontWeight: 400,
        textAlign: 'center',

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(24),
        },
    },

    ilustration: {
        margin: 10,
        height: '500px',
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',

        [theme.fn.smallerThan('xs')]: {
            height: '400px',
            width: '100%',
            backgroundSize: '220%',
        },
    },

    button: {
        margin: 20,
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
          margin: 10,
        },
    },
}))

export function CallToAction() {
    const theme = useMantineTheme();
    const { classes } = useStyles();
    const { t } = useTranslation();

    return (
        <div className={classes.container}>
            <Title order={2} className={classes.title}>
                {t("call_to_action.title")}
            </Title>
            <div className={classes.ilustration} style={{backgroundImage: `url(${report})`}}></div>
            <Text className={classes.text}>
                {t("call_to_action.text1")}
                <span style={{fontWeight: '700'}}>
                    {t("call_to_action.text_highlight")}
                </span>
                {t("call_to_action.text2")}
            </Text>
            <Link href='/get-started'>
                <Button className={classes.button} size='lg' radius='md'>
                    {t("call_to_action.button")}
                </Button>
            </Link>
        </div>
    )
}