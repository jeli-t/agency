import { createStyles, useMantineTheme, Title, rem, Text } from '@mantine/core';
import { TypeAnimation } from 'react-type-animation';
import { IconSearch } from '@tabler/icons-react';


const useStyles = createStyles((theme) => ({
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(50),
        fontWeight: 700,
    
        [theme.fn.smallerThan('xs')]: {
          fontSize: rem(28),
        },
    },

    text: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(20),
        fontWeight: 300,
    
        [theme.fn.smallerThan('xs')]: {
          fontSize: rem(16),
        },
    },

    search_bar: {
        display: 'block',
        position: 'relative',
        // height: 60,
        marginTop: 50,
        width: 700,
        maxWidth: '90%',
        padding: 10,
        paddingLeft: 30,
        border: '2px solid',
        borderRadius: theme.radius.xl,
        borderColor: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [theme.fn.smallerThan('xs')]: {
            paddingLeft: 10,
        },
    },

    icon: {
        position: 'absolute',
        right: 30,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [theme.fn.smallerThan('xs')]: {
            top: 5,
            right: 10,
        },
    },

    type_animation: {
        display: 'inline-block',
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(30),
        lineHeight: 1,
        fontWeight: 400,
    
        [theme.fn.smallerThan('xs')]: {
          fontSize: rem(20),
        },
    }
}))

export function HeroSection() {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    return (
        <div  className={classes.container}>
            <Title className={classes.title}>
                Stay noticeable online
            </Title>
            <Text className={classes.text}>
                We will take care of your:
            </Text>
            <div className={classes.search_bar}>
                <TypeAnimation
                    sequence={[
                        2000,
                        'Search Engine Optimization',
                        2000,
                        'Web development',
                        2000,
                        'Social media management',
                    ]}
                    wrapper="span"
                    className={classes.type_animation}
                    repeat={Infinity}
                />
                <IconSearch className={classes.icon} size="2rem" stroke={2} />
            </div>
        </div>
    )
}