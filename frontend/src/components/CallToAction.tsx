import { Link } from 'react-router-dom';
import { createStyles, useMantineTheme, Title, rem, Text, Button } from '@mantine/core';
import report from './../assets/report.svg';


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
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(70),
        fontWeight: 700,
        margin: 10,
    
        [theme.fn.smallerThan('xs')]: {
          fontSize: rem(50),
        },
    },

    text: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(34),
        fontWeight: 500,

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(16),
        },
    },

    highlight: {
        position: 'relative',
        backgroundColor: theme.primaryColor,
        borderRadius: theme.radius.sm,
        padding: `${rem(4)} ${rem(12)}`,
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

        [theme.fn.smallerThan('lg')]: {
            width: '50%',
            margin: 10,
        },

        [theme.fn.smallerThan('xs')]: {
            width: '100%',
            marginBottom: -10,
        },
    },

    button: {
        margin: 20,
        color: theme.white,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(40),
        fontWeight: 600,
        backgroundImage: 'linear-gradient(133deg, #fd7e14 0%, #fa5252 100%)',
        transition: '0.2s',
        opacity: 1,

        '&:hover': {
            opacity: 0.7,
        },
    
        [theme.fn.smallerThan('xs')]: {
          fontSize: rem(16),
        },
    },
}))

export function CallToAction() {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    return (
        <div className={classes.container}>
            <Title className={classes.title}>
                Make yourself <span className={classes.highlight}>visible</span>
            </Title>
            <Text className={classes.text}>
                Get a <span style={{fontWeight: '700'}}>free</span> personalized report and suggestions
            </Text>
            <div className={classes.ilustration} style={{backgroundImage: `url(${report})`}}></div>
            <Link to='/get_started'>
                <Button className={classes.button} size='xl' radius='md'>
                    Get started
                </Button>
            </Link>
        </div>
    )
}