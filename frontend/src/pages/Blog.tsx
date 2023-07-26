import { MantineProvider, useMantineTheme } from '@mantine/core';
import { BlogBanner } from '../components/BlogBanner';


export default function Blog() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
            <BlogBanner></BlogBanner>
        </MantineProvider>
    )
}