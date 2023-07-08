import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createStyles, useMantineTheme, Title, rem, Text, Button } from '@mantine/core';
import web_development from './../assets/web_development.svg'
import seo from './../assets/seo.svg'
import social_media from './../assets/social_media.svg'
import marketing from './../assets/marketing.svg'


const useStyles = createStyles((theme) => ({
    wrapper: {
        height: 'auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        [theme.fn.smallerThan('xs')]: {
            marginTop: 30,
        },
    },

    product: {
        height: '600px',
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
            width: '100%',
            height: '500px',
            margin: 40,
        },
    },

    product2: {
        height: '500px',
        width: '80%',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 80,

        [theme.fn.smallerThan('lg')]: {
            width: '100%',
        },

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
            width: '100%',
            margin: 40,
        },
    },

    description: {
        height: '100%',
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        [theme.fn.smallerThan('xs')]: {
            width: '100%',
            height: 'auto',
            marginTop: -20,
        },
    },

    ilustration: {
        height: '100%',
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',

        [theme.fn.smallerThan('xs')]: {
            width: '100%',
            marginBottom: -20,
        },
    },

    service_title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(40),
        fontWeight: 600,
        margin: 10,

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
        padding: 5,

        [theme.fn.smallerThan('lg')]: {
            fontSize: rem(20),
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(16),
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

export function ProductsSection() {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.product}>
                <div className={classes.ilustration} style={{backgroundImage: `url(${web_development})`}}></div>
                <div className={classes.description}>
                    <Title className={classes.service_title}>
                        Websites
                    </Title>
                    <Text className={classes.text}>
                        We will take care of your online image
                    </Text>
                    <Link to='/contact'>
                        <Button className={classes.button} size='lg' radius='md'>
                            Contact me
                        </Button>
                    </Link>
                </div>
            </div>

            <div className={classes.product2}>
                <div className={classes.ilustration} style={{backgroundImage: `url(${seo})`}}></div>
                <div className={classes.description}>
                    <Title className={classes.service_title}>
                        Search Engine Optimization
                    </Title>
                    <Text className={classes.text}>
                        We will take care of your online image
                    </Text>
                    <Link to='/contact'>
                        <Button className={classes.button} size='lg' radius='md'>
                            Contact me
                        </Button>
                    </Link>
                </div>
            </div>

            <div className={classes.product}>
                <div className={classes.ilustration} style={{backgroundImage: `url(${social_media})`}}></div>
                <div className={classes.description}>
                    <Title className={classes.service_title}>
                        Social media
                    </Title>
                    <Text className={classes.text}>
                        We will take care of your online image
                    </Text>
                    <Link to='/contact'>
                        <Button className={classes.button} size='lg' radius='md'>
                            Contact me
                        </Button>
                    </Link>
                </div>
            </div>

            <div className={classes.product2}>
                <div className={classes.ilustration} style={{backgroundImage: `url(${marketing})`}}></div>
                <div className={classes.description}>
                    <Title className={classes.service_title}>
                        Digital marketing
                    </Title>
                    <Text className={classes.text}>
                        We will take care of your online image
                    </Text>
                    <Link to='/contact'>
                        <Button className={classes.button} size='lg' radius='md'>
                            Contact me
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}