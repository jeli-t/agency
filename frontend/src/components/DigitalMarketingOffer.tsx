import { createStyles, useMantineTheme, Title, rem, Text, Button } from '@mantine/core';
import report from './../assets/report.svg'
import { Link } from 'react-router-dom';


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
        marginTop: 40,

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
        width: '100%',
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

    button: {
        width: 200,
        marginTop: 20,
        marginRight: 20,
        color: theme.white,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(24),
        fontWeight: 600,
    
        [theme.fn.smallerThan('xs')]: {
            width: 140,
            fontSize: rem(16),
            marginRight: 10,
        },
    },
}))

export function DigitalMarketingOffer() {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.hero_section}>
                <div className={classes.ilustration}>
                    <img src={report} alt='Trust us' title='You can trust us' loading='lazy' width={845} height={800} className={classes.image} />
                </div>
                <div className={classes.description}>
                    <Title order={2} className={classes.title}>
                        Free personalized strategy
                    </Title>
                    <Text className={classes.text}>
                        If you would like to receive a <span style={{fontWeight: 700}}>free</span> personalized strategy and offer for your business, check out the Get started section. If you want to ask about anything related to digital marketing, write us a message or contact us directly to schedule a <span style={{fontWeight: 700}}>free</span> video consultation.
                    </Text>
                    <div>
                        <Link to='/get-started'>
                            <Button className={classes.button} size='lg' radius='md'>
                                Get started
                            </Button>
                        </Link>
                        <Link to='/contact'>
                            <Button className={classes.button} size='lg' radius='md'>
                                Contact
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}