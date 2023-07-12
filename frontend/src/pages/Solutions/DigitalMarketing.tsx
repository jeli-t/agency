import { MantineProvider, useMantineTheme } from '@mantine/core';


export default function DigitalMarketing() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
            <h1>Digital marketing</h1>
        </MantineProvider>
    )
}