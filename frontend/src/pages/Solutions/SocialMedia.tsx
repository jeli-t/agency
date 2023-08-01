import { MantineProvider, useMantineTheme } from '@mantine/core';
import { SocialMediaBanner } from '../../components/SocialMediaBanner';
import { Helmet } from 'react-helmet-async';
import { SocialMediaStrategy } from '../../components/SocialMediaStrategy';
import { SocialMediaWorth } from '../../components/SocialMediaWorth';
import { OurProcess } from '../../components/OurProcess';


export default function SocialMedia() {
    const mainTheme = useMantineTheme();

    return (
        <>
            <Helmet>
                <title>Social media | Jeli Digital Agency</title>
                <meta name='description' content="Social media is one of the most important elements of building a brand nowadays. Social media is also one of the best places to run advertising campaigns and reach new customers." />
                <link rel='canonical' href='/social-media' />
            </Helmet>
            <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
                <SocialMediaBanner></SocialMediaBanner>
                <SocialMediaStrategy></SocialMediaStrategy>
                <SocialMediaWorth></SocialMediaWorth>
                <OurProcess></OurProcess>
            </MantineProvider>
        </>
    )
}