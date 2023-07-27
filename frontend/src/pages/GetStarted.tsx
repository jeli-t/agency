import { MantineProvider, useMantineTheme } from '@mantine/core';
import { GetStartedBanner } from '../components/GetStartedBanner';
import { Survey } from '../components/Survey';
import { Helmet } from 'react-helmet-async';


export default function GetStarted() {
    const mainTheme = useMantineTheme();

    return (
        <>
            <Helmet>
                <title>Get started | Jeli Digital Agency</title>
                <meta name='description' content="Not sure where to start? Answer a few questions below for personalized suggestions." />
                <link rel='canonical' href='/get-started' />
            </Helmet>
            <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
                <GetStartedBanner></GetStartedBanner>
                <Survey></Survey>
            </MantineProvider>
        </>
    )
}