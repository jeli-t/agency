import { MantineProvider, useMantineTheme } from '@mantine/core';
import { DigitalMarketingBanner } from '../../components/DigitalMarketingBanner';
import { Helmet } from 'react-helmet-async';
import { DigitalMarketingChannels } from '../../components/DigitalMarketingChannels';
import { DigitalMarketingStrategy } from '../../components/DigitalMarketingStrategy';
import { OurProcess } from '../../components/OurProcess';


export default function DigitalMarketing() {
    const mainTheme = useMantineTheme();

    return (
        <>
            <Helmet>
                <title>Digital marketing | Jeli Digital Agency</title>
                <meta name='description' content='Google Ads? Running a blog about your business and industry? Mailing and newsletters? Courses? Here you will find plenty of ideas on how to grow your business online.' />
                <link rel='canonical' href='/digital-marketing' />
            </Helmet>
            <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
                <DigitalMarketingBanner></DigitalMarketingBanner>
                <DigitalMarketingChannels></DigitalMarketingChannels>
                <DigitalMarketingStrategy></DigitalMarketingStrategy>
                <OurProcess></OurProcess>
            </MantineProvider>
        </>
    )
}