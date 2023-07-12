import { MantineProvider, useMantineTheme } from '@mantine/core';


export default function Websites() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
            <h1>Websites</h1>
        </MantineProvider>
    )
}