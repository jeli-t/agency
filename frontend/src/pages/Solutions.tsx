import { MantineProvider, useMantineTheme } from '@mantine/core';
import { SolutionCategories } from '../components/SolutionCategories';


export default function Solutions() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
            <SolutionCategories></SolutionCategories>
        </MantineProvider>
    )
}