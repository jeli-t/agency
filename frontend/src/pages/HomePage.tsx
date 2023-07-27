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
                <meta name='description' content='We will help you become visible online. From the website to social media. We provide comprehensive and tailored solutions for small and medium-sized businesses.' />
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