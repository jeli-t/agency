import { MantineProvider, useMantineTheme } from '@mantine/core';
import { HeroSection } from '../components/HeroSection';
import { ProductsSection } from '../components/ProductsSection';
import { AboutSection } from '../components/AboutSection';
import { CallToAction } from '../components/CallToAction';
import { FaqSection } from '../components/FaqSection';


export default function HomePage() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
            <HeroSection></HeroSection>
            <AboutSection></AboutSection>
            <ProductsSection></ProductsSection>
            <CallToAction></CallToAction>
            <FaqSection></FaqSection>
        </MantineProvider>
    )
}