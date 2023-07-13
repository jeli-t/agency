import { MantineProvider, useMantineTheme } from '@mantine/core';
import { SocialMediaBanner } from '../../components/SocialMediaBanner';


export default function SocialMedia() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
            <SocialMediaBanner></SocialMediaBanner>
        </MantineProvider>
    )
}