import { MantineProvider, useMantineTheme } from '@mantine/core';
import { ProductsSection } from '../components/ProductsSection';


export default function Solutions() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
            <ProductsSection></ProductsSection>
        </MantineProvider>
    )
}