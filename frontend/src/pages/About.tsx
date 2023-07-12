import { MantineProvider, useMantineTheme } from '@mantine/core';
import { MyStory } from '../components/MyStory';


export default function About() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
            <MyStory></MyStory>
        </MantineProvider>
    )
}