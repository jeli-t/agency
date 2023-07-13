import { MantineProvider, useMantineTheme } from '@mantine/core';
import { SeoBanner } from '../../components/SeoBanner';


export default function Seo() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
            <SeoBanner></SeoBanner>
        </MantineProvider>
    )
}