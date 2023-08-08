import { MantineProvider, Title, useMantineTheme } from '@mantine/core';
import { HeroSection } from '../components/HeroSection';
import { ProductsSection } from '../components/ProductsSection';
import { AboutSection } from '../components/AboutSection';
import { CallToAction } from '../components/CallToAction';
import { ContactSection } from '../components/ContactSection';
import { FaqSection } from '../components/FaqSection';
import { Helmet } from 'react-helmet-async';


export default function HomePage() {
    const mainTheme = useMantineTheme();

    return (
        <>
            <Helmet>
                <title>Jeli Digital Agency | Websites | SEO | Social media</title>
                <meta name='description' content='Comprehensive and tailored digital marketing for businesses. Profesional Websites, Search Engine Optimization, Social media' />
                <link rel='canonical' href='/' />
            </Helmet>
            <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
                <HeroSection></HeroSection>
                <AboutSection></AboutSection>
                <ProductsSection></ProductsSection>
                <CallToAction></CallToAction>
                <ContactSection></ContactSection>
                <FaqSection></FaqSection>
            </MantineProvider>
        </>
    )
}