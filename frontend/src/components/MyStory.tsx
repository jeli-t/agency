import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createStyles, useMantineTheme, Title, rem, Text, Button } from '@mantine/core';
import about_me from './../assets/about_me.svg'


const useStyles = createStyles((theme) => ({
    wrapper: {
        height: '100vh',
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
        height: '800px',
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 80,

        [theme.fn.smallerThan('lg')]: {
            width: '100%',
        },

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
            width: '90%',
            margin: 0,
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
            width: '50%',
            margin: 10,
        },

        [theme.fn.smallerThan('xs')]: {
            width: '100%',
            height: 'auto',
        },
    },

    ilustration: {
        height: '100%',
        width: '55%',
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
            height: '300px',
            width: '100%',
            backgroundSize: '160%',
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
        marginTop: 20,
        color: theme.white,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(24),
        fontWeight: 600,
    
        [theme.fn.smallerThan('xs')]: {
          fontSize: rem(16),
        },
    },
}))

export function MyStory() {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.hero_section}>
                <div className={classes.description}>
                    <Title className={classes.title}>
                        Hi, my name is Tomek
                    </Title>
                    <Text className={classes.text}>
                        I started my adventure with programming at the age of 12. Since then I have learned a lot and written thousands of lines of code. At this point, I have closed a few commercial projects and I am working on my portfolio. We are not registered company yet but I'am working on that. For now I work as a freelancer based on a contract for work.
                    </Text>
                    <Link to='/contact'>
                        <Button className={classes.button} size='lg' radius='md'>
                            Contact
                        </Button>
                    </Link>
                </div>
                <div className={classes.ilustration} style={{backgroundImage: `url(${about_me})`}}></div>
            </div>
        </div>
    )
}