import { createStyles, Title, Text, Container, rem } from '@mantine/core';
import { Dots } from '../assets/Dots';


const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        marginTop: rem(80),
        marginBottom: rem(80),

        [theme.fn.smallerThan('sm')]: {
            marginTop: rem(60),
            marginBottom: rem(60),
        },
    },

    inner: {
        position: 'relative',
        zIndex: 1,
    },

    dots: {
        position: 'absolute',
        color: theme.colorScheme === 'dark' ? theme.colors.gray[6] : theme.colors.gray[3],

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    dotsLeft: {
        left: 0,
        top: 0,
    },

    title: {
        textAlign: 'left',
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

    description: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(24),
        fontWeight: 500,
        textAlign: 'left',

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(20),
            textAlign: 'left',
        },
    },
}));

export function DigitalMarketingBanner() {
    const { classes } = useStyles();

    return (
        <Container className={classes.wrapper} size={1400}>
            <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
            <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

            <div className={classes.inner}>
                <Container p={0} size={800}>
                    <Title order={1} className={classes.title}>
                        Digital marketing opportunities
                    </Title>
                    <Text className={classes.description}>
                        Digital marketing offers numerous opportunities for businesses to reach and engage with their target audience effectively. It allows for highly targeted advertising to reach specific demographics, interests, behaviors, and locations. This precision targeting increases the chances of converting leads into customers. Digital marketing has become an essential aspect of modern marketing for businesses of all sizes.
                    </Text>
                </Container>
            </div>
        </Container>
    );
}