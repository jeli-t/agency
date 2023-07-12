import { MantineProvider, useMantineTheme } from '@mantine/core';
import { Footer } from '../components/Footer';
import { MyStory } from '../components/MyStory';


export default function About() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
            <MyStory></MyStory>
            <Footer></Footer>
        </MantineProvider>
    )
}