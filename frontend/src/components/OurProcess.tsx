import { Link } from 'react-router-dom';
import { createStyles, useMantineTheme, Title, rem, Text, Timeline } from '@mantine/core';
import our_process from './../assets/our_process.svg'


const useStyles = createStyles((theme) => ({
    wrapper: {
        height: 'fit',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : theme.colors.gray[1],

        [theme.fn.smallerThan('xs')]: {
            justifyContent: 'flex-start',
        }
    },

    hero_section: {
        minHeight: '800px',
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 80,

        [theme.fn.smallerThan('lg')]: {
            flexDirection: 'column-reverse',
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
        fontSize: rem(20),
        fontWeight: 500,

        [theme.fn.smallerThan('lg')]: {
            fontSize: rem(18),
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(16),
        },
    },

    itemTitle: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(24),
        fontWeight: 600,

        [theme.fn.smallerThan('lg')]: {
            fontSize: rem(20),
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(18),
        },
    },

    link: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontWeight: 600,
        textDecoration: 'none',
    },

}))

export function OurProcess() {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.hero_section}>
                <div className={classes.description}>
                    <Title className={classes.title}>
                        Our Process
                    </Title>
                    <Timeline bulletSize={24} lineWidth={4} color='orange' active={4} classNames={{itemTitle: classes.itemTitle}} >
                        <Timeline.Item title='Information gathering'>
                            <Text className={classes.text}>
                                We collect basic information about your business and marketing goals. Check out the <Link to='/get-started' className={classes.link}>Get started</Link> section or <Link to='/contact' className={classes.link}>contact</Link> us directly.
                            </Text>
                        </Timeline.Item>
                        <Timeline.Item title='Project planning'>
                            <Text className={classes.text}>
                                We prepare an operation plan and marketing strategy for your company. You accept the proposal and we start the project.
                            </Text>
                        </Timeline.Item>
                        <Timeline.Item title='Team building'>
                            <Text className={classes.text}>
                                Based on the needs of the project, we choose the technologies we will use and form a team that will be responsible for its development.
                            </Text>
                        </Timeline.Item>
                        <Timeline.Item title='Project development' lineVariant='dashed'>
                            <Text className={classes.text}>
                                We start working on the project to meet your marketing goals. We stay in touch and make adjustments all the time.
                            </Text>
                        </Timeline.Item>
                        <Timeline.Item title='Success'>
                            <Text className={classes.text}>
                                The strategy is working, and your business is growing faster than ever before.
                            </Text>
                        </Timeline.Item>
                    </Timeline>
                </div>
                <div className={classes.ilustration}>
                    <img src={our_process} alt='Our process' title='Our process' loading='lazy' width={845} height={800} className={classes.image} />
                </div>
            </div>
        </div>
    )
}