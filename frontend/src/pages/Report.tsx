import { MantineProvider, useMantineTheme } from '@mantine/core';
import { ReportBanner } from '../components/ReportBanner';
import { Helmet } from 'react-helmet-async';


export default function Report() {
    const mainTheme = useMantineTheme();

    return (
        <>
            <Helmet>
                <title>Parsonalized report | Jeli Digital Agency</title>
                <meta name='description' content='We are preparing a report for you. It should be ready within 24 hours.' />
                <link rel='canonical' href='/results' />
                <meta name="robots" content="Noindex" />
            </Helmet>
            <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
                <ReportBanner></ReportBanner>
            </MantineProvider>
        </>
    )
}