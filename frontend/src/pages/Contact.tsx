import { MantineProvider, useMantineTheme } from '@mantine/core';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { FaqSection } from '../components/FaqSection';


export default function About() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
            <ContactSection></ContactSection>
            <FaqSection></FaqSection>
            <Footer></Footer>
        </MantineProvider>
    )
}