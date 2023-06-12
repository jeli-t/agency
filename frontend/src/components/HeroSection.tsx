import { createStyles, useMantineTheme, Title, rem, Text, MantineProvider, Overlay } from '@mantine/core';
import { TypeAnimation } from 'react-type-animation';
import { IconSearch } from '@tabler/icons-react';
import web_development from './../assets/web_development.svg'
import seo from './../assets/seo.svg'
import social_media from './../assets/social_media.svg'


const useStyles = createStyles((theme) => ({
    container: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    content: {
        height: '100%',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 'unset',
    },

    ilustration: {
        height: '100%',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${web_development})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(60),
        fontWeight: 700,
    
        [theme.fn.smallerThan('xs')]: {
          fontSize: rem(28),
        },
    },

    text: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(24),
        fontWeight: 600,
    
        [theme.fn.smallerThan('xs')]: {
          fontSize: rem(16),
        },
    },

    search_bar: {
        display: 'block',
        position: 'relative',
        marginTop: 50,
        width: 700,
        maxWidth: '90%',
        padding: 10,
        paddingLeft: 30,
        border: '4px solid',
        borderRadius: theme.radius.xl,
        borderColor: theme.black,
        backgroundColor: theme.white,
        color: theme.black,

        [theme.fn.smallerThan('xs')]: {
            paddingLeft: 10,
        },
    },

    highlight: {
        position: 'relative',
        backgroundColor: theme.primaryColor,
        borderRadius: theme.radius.sm,
        padding: `${rem(4)} ${rem(12)}`,
    },

    icon: {
        position: 'absolute',
        right: 30,
        color: theme.black,

        [theme.fn.smallerThan('xs')]: {
            top: 5,
            right: 10,
        },
    },

    type_animation: {
        display: 'inline-block',
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
            {/* <Overlay color="#000" opacity={0.2} zIndex={0} /> */}
            <div className={classes.content}>
                <Title className={classes.title}>
                    Make yourself <span className={classes.highlight}>visible</span>
                </Title>
                <Text className={classes.text}>
                    We will take care of your online image
                </Text>
                <div className={classes.search_bar}>
                    <TypeAnimation
                        sequence={[
                            2000,
                            'Web development',
                            2000,
                            'Search Engine Optimization',
                            2000,
                            'Social media management',
                        ]}
                        wrapper="span"
                        className={classes.type_animation}
                        repeat={Infinity}
                    />
                    <IconSearch className={classes.icon} size="2rem" stroke={3} />
                </div>
            </div>
            <div className={classes.ilustration}></div>
        </div>
    )
}