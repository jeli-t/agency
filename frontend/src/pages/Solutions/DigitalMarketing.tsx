import { MantineProvider, useMantineTheme } from '@mantine/core';
import { DigitalMarketingBanner } from '../../components/DigitalMarketingBanner';


export default function DigitalMarketing() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
            <DigitalMarketingBanner></DigitalMarketingBanner>
        </MantineProvider>
    )
}