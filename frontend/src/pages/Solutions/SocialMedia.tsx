import { MantineProvider, useMantineTheme } from '@mantine/core';


export default function SocialMedia() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
            <h1>Social media</h1>
        </MantineProvider>
    )
}