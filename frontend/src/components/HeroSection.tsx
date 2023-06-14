import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createStyles, useMantineTheme, Title, rem, Text, Button } from '@mantine/core';
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

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    content: {
        height: '100%',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 'unset',

        [theme.fn.smallerThan('xs')]: {
            width: '100%',
            height: 'auto',
            marginTop: 50,
        },
    },

    ilustration: {
        height: '100%',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',

        [theme.fn.smallerThan('xs')]: {
            width: '100%',
            height: '200',
        },
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
            marginTop: 30,
            border: '2px solid',
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
    },

    button: {
        marginTop: 20,
        color: theme.white,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(24),
        fontWeight: 600,
    
        [theme.fn.smallerThan('xs')]: {
          fontSize: rem(16),
          marginTop: 10,
        },
    },
}))

export function HeroSection() {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    const [activeIlustration, setActiveIlustration] = useState(web_development);

    return (
        <div  className={classes.container}>
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
                            1000,
                            '',
                            () => {
                                setActiveIlustration(web_development)
                            },
                            'Web development',
                            2000,
                            '',
                            () => {
                                setActiveIlustration(seo)
                            },
                            'Search Engine Optimization',
                            2000,
                            '',
                            () => {
                                setActiveIlustration(social_media)
                            },
                            'Social media management',
                            1000,
                        ]}
                        wrapper="span"
                        className={classes.type_animation}
                        repeat={Infinity}
                    />
                    <IconSearch className={classes.icon} size="2rem" stroke={3} />
                </div>
                <Link to='/contact'>
                    <Button className={classes.button} size='lg' radius='md'>
                        Contact me
                    </Button>
                </Link>
            </div>
            <div className={classes.ilustration} style={{backgroundImage: `url(${activeIlustration})`}}></div>
        </div>
    )
}