import { MantineProvider, useMantineTheme } from '@mantine/core';


export default function Seo() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
            <h1>Seo</h1>
        </MantineProvider>
    )
}