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
        marginBottom: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        [theme.fn.smallerThan('xs')]: {
            marginTop: 30,
            marginBottom: 50,
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
            width: '90%',
            margin: 40,
        },
    },

    product2: {
        height: '600px',
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
            width: '90%',
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

        [theme.fn.smallerThan('lg')]: {
            width: '50%',
            margin: 10,
        },

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

        [theme.fn.smallerThan('lg')]: {
            width: '50%',
            margin: 10,
        },

        [theme.fn.smallerThan('xs')]: {
            width: '100%',
            marginBottom: -10,
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

            <section id='Websites' className={classes.product}>
                <div className={classes.ilustration} style={{backgroundImage: `url(${web_development})`}}></div>
                <div className={classes.description}>
                    <Title order={3} className={classes.service_title}>
                        Websites
                    </Title>
                    <Text className={classes.text}>
                        A website is crucial for businesses for many reasons, and in the digital age it has become a fundamental component of any successful business strategy. Take a look what benefits it can bring to you and how we can help you with that.
                    </Text>
                    <Link to='/websites'>
                        <Button className={classes.button} size='lg' radius='md'>
                            Read more
                        </Button>
                    </Link>
                </div>
            </section>

            <section id='Search-Engine-Optimization' className={classes.product2}>
                <div className={classes.ilustration} style={{backgroundImage: `url(${seo})`}}></div>
                <div className={classes.description}>
                    <Title order={3} className={classes.service_title}>
                        Search Engine Optimization
                    </Title>
                    <Text className={classes.text}>
                        Already have a website? Good, now it's important to make sure it shows up when someone tries to google your business. You don't have to look for customers, they are already looking for you. Just let them know you exist.
                    </Text>
                    <Link to='/search-engine-optimization'>
                        <Button className={classes.button} size='lg' radius='md'>
                            Read more
                        </Button>
                    </Link>
                </div>
            </section>

            <section id='Social-media' className={classes.product}>
                <div className={classes.ilustration} style={{backgroundImage: `url(${social_media})`}}></div>
                <div className={classes.description}>
                    <Title order={3} className={classes.service_title}>
                        Social media
                    </Title>
                    <Text className={classes.text}>
                        Social media is one of the most important elements of building a brand nowadays. Social media is also one of the best places to run advertising campaigns and reach new customers. Find out how to build an effective strategy.
                    </Text>
                    <Link to='/social-media'>
                        <Button className={classes.button} size='lg' radius='md'>
                            Read more
                        </Button>
                    </Link>
                </div>
            </section>

            <section id='Digital-marketing' className={classes.product2}>
                <div className={classes.ilustration} style={{backgroundImage: `url(${marketing})`}}></div>
                <div className={classes.description}>
                    <Title order={3} className={classes.service_title}>
                        Much more
                    </Title>
                    <Text className={classes.text}>
                        Digital marketing has much more potential. Google Ads? Running a blog about your business and industry? Mailing and newsletters? Courses? Here you will find plenty of ideas on how to grow your business online.
                    </Text>
                    <Link to='/digital-marketing'>
                        <Button className={classes.button} size='lg' radius='md'>
                            Read more
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}