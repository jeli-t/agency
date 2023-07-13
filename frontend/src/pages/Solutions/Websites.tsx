import { MantineProvider, useMantineTheme } from '@mantine/core';
import { WebsitesBanner } from '../../components/WebsitesBanner';


export default function Websites() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
            <WebsitesBanner></WebsitesBanner>
        </MantineProvider>
    )
}