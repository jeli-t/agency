import { MantineProvider, useMantineTheme } from '@mantine/core';
import { WebsitesBanner } from '../../components/WebsitesBanner';
import { Helmet } from 'react-helmet-async';
import { GoodWebsite } from '../../components/GoodWebsite';
import { BuildWebsite } from '../../components/BuildWebsite';
import { WebsitesProcess } from '../../components/WebsitesProcess';
import { WebsitesOffer } from '../../components/WebsitesOffer';


export default function Websites() {
    const mainTheme = useMantineTheme();

    return (
        <>
            <Helmet>
                <title>Websites | Jeli Digital Agency</title>
                <meta name='description' content="Web Design, UI/UX, development, hosting, domains. Everything to make your business visible online." />
                <link rel='canonical' href='/websites' />
            </Helmet>
            <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
                <WebsitesBanner></WebsitesBanner>
                <GoodWebsite></GoodWebsite>
                <BuildWebsite></BuildWebsite>
                <WebsitesProcess></WebsitesProcess>
                <WebsitesOffer></WebsitesOffer>
            </MantineProvider>
        </>
    )
}