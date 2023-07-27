import { MantineProvider, useMantineTheme } from '@mantine/core';
import { ContactSection } from '../components/ContactSection';
import { FaqSection } from '../components/FaqSection';
import { Helmet } from 'react-helmet-async';


export default function About() {
    const mainTheme = useMantineTheme();

    return (
        <>
            <Helmet>
                <title>Contact | Jeli Digital Agency</title>
                <meta name='description' content="Write us what you need. We will answer all your questions. If you want to use our services, we can arrange a video conference to discuss the details." />
                <link rel='canonical' href='/contact' />
            </Helmet>
            <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
                <ContactSection></ContactSection>
                <FaqSection></FaqSection>
            </MantineProvider>
        </>
    )
}