import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createStyles, useMantineTheme, Title, rem, Text, Button } from '@mantine/core';
import { TypeAnimation } from 'react-type-animation';
import { IconSearch } from '@tabler/icons-react';


const useStyles = createStyles((theme) => ({
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: theme.colorScheme === 'dark' ? 'radial-gradient(#ff8700 1.7px, #000000 1.7px)' : 'radial-gradient(#ff8700 1.7px, #ffffff 1.7px)',
        backgroundSize: '40px 40px',

        [theme.fn.smallerThan('xs')]: {
            height: 'auto',
            marginTop: 50,
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(70),
        fontWeight: 700,
        margin: 10,
    
        [theme.fn.smallerThan('xs')]: {
          fontSize: rem(60),
        },
    },

    search_bar: {
        display: 'block',
        position: 'relative',
        margin: 10,
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
            border: '2px solid',
        },
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

export function HeroSection() {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    return (
        <div className={classes.container}>
            <Title className={classes.title}>
                jeli.pl
            </Title>
            <div className={classes.search_bar}>
                <TypeAnimation
                    sequence={[
                        1000,
                        '',
                        'Web development',
                        2000,
                        '',
                        'Search Engine Optimization',
                        2000,
                        '',
                        'Software as a Service',
                        2000,
                        '',
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
    )
}