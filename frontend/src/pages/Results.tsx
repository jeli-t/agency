import { MantineProvider, useMantineTheme } from '@mantine/core';
import { ResultsBanner } from '../components/ResultsBanner';
import { Helmet } from 'react-helmet-async';


export default function Results() {
    const mainTheme = useMantineTheme();

    return (
        <>
            <Helmet>
                <title>Personalized suggestions | Jeli Digital Agency</title>
                <meta name='description' content='' />
                <link rel='canonical' href='/results' />
                <meta name="robots" content="Noindex" />
            </Helmet>
            <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
                <ResultsBanner></ResultsBanner>
            </MantineProvider>
        </>
    )
}