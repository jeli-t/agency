import { MantineProvider, useMantineTheme } from '@mantine/core';
import { PricingBanner } from '../components/PricingBanner';


export default function Pricing() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
            <PricingBanner></PricingBanner>
        </MantineProvider>
    )
}