import { MantineProvider, useMantineTheme } from '@mantine/core';
import { AboutUs } from '../components/AboutUs';
import { OurProcess } from '../components/OurProcess'
import { FaqSection } from '../components/FaqSection';
import { Helmet } from 'react-helmet-async';


export default function About() {
    const mainTheme = useMantineTheme();

    return (
        <>
            <Helmet>
                <title>About Us | Jeli Digital Agency</title>
                <meta name='description' content="Jeli Digital Agency is a modern company that offers a comprehensive approach to online marketing, from website to social media." />
                <link rel='canonical' href='/about' />
            </Helmet>
            <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
                <AboutUs></AboutUs>
                <OurProcess></OurProcess>
                <FaqSection></FaqSection>
            </MantineProvider>
        </>
    )
}