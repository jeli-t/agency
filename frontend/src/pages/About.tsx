import { MantineProvider, useMantineTheme } from '@mantine/core';
import { MyStory } from '../components/MyStory';
import { Helmet } from 'react-helmet-async';


export default function About() {
    const mainTheme = useMantineTheme();

    return (
        <>
            <Helmet>
                <title>About Us | Jeli Digital Agency</title>
                <meta name='description' content="" />
                <link rel='canonical' href='/about' />
            </Helmet>
            <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
                <MyStory></MyStory>
            </MantineProvider>
        </>
    )
}