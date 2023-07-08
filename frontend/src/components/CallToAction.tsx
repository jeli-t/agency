import { Link } from 'react-router-dom';
import { createStyles, useMantineTheme, Title, rem, Text, Button } from '@mantine/core';


const useStyles = createStyles((theme) => ({
    container: {
        height: 'fit',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: theme.colorScheme === 'dark' ? 'radial-gradient(#ff8700 1.7px, #212529 1.7px)' : 'radial-gradient(#ff8700 1.7px, #f1f3f5 1.7px)',
        backgroundSize: '40px 40px',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center center',
        padding: 100,

        [theme.fn.smallerThan('xs')]: {
            height: 'auto',
            padding: 20,
            paddingTop: 50,
            paddingBottom: 50,
        },
    },

    box: {
        width: '60%',
        minWidth: '900px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[7] : theme.white,
        padding: 50,
        border: '5px solid',
        borderColor: theme.primaryColor,

        [theme.fn.smallerThan('md')]: {
            width: '100%',
            minWidth: 0,
            padding: 10,
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
        fontSize: rem(30),
        fontWeight: 600,

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
}))

export function CallToAction() {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.box}>
                <Title className={classes.title}>
                    Make yourself <span className={classes.highlight}>visible</span>
                </Title>
                <Text className={classes.text}>
                    Get a <span style={{fontWeight: 'bolder'}}>free</span> consultation
                </Text>
                <Link to='/contact'>
                    <Button className={classes.button} size='lg' radius='md'>
                        Contact us
                    </Button>
                </Link>
            </div>
        </div>
    )
}