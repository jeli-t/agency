import { useMantineTheme, MantineProvider, Text } from '@mantine/core';


export default function HomePage() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Text>Welcome to jeli.pl!</Text>
        </MantineProvider>
    )
}