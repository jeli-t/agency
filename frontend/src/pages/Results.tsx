import { MantineProvider, useMantineTheme } from '@mantine/core';
import { ResultsBanner } from '../components/ResultsBanner';


export default function Results() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
            <ResultsBanner></ResultsBanner>
        </MantineProvider>
    )
}