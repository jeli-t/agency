import { MantineProvider, useMantineTheme } from '@mantine/core';
import { PricingBanner } from '../components/PricingBanner';
import { PricingCategories } from '../components/PricingCategories';
import { Helmet } from 'react-helmet-async';


export default function Pricing() {
    const mainTheme = useMantineTheme();

    return (
        <>
            <Helmet>
                <title>Pricing | Jeli Digital Agency</title>
                <meta name='description' content='On this page you will find all the information about how we price our services.' />
                <link rel='canonical' href='/pricing' />
            </Helmet>
            <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
                <PricingBanner></PricingBanner>
                <PricingCategories></PricingCategories>
            </MantineProvider>
        </>
    )
}