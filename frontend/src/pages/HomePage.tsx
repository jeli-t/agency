import { MantineProvider, useMantineTheme } from '@mantine/core';
import { HeroSection } from '../components/HeroSection';
import { ProductsSection } from '../components/ProductsSection';


export default function HomePage() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
            <HeroSection></HeroSection>
            <ProductsSection></ProductsSection>
        </MantineProvider>
    )
}