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
}))

export function Survey() {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            Survey here
        </div>
    )
}