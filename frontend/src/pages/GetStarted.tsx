import { MantineProvider, useMantineTheme } from '@mantine/core';
import { GetStartedBanner } from '../components/GetStartedBanner';
import { Survey } from '../components/Survey';


export default function GetStarted() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
            <GetStartedBanner></GetStartedBanner>
            <Survey></Survey>
        </MantineProvider>
    )
}