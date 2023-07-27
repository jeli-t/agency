import { MantineProvider, useMantineTheme } from '@mantine/core';
import { SolutionCategories } from '../components/SolutionCategories';
import { Helmet } from 'react-helmet-async';


export default function Solutions() {
    const mainTheme = useMantineTheme();

    return (
        <>
            <Helmet>
                <title>Solutions | Jeli Digital Agency</title>
                <meta name='description' content='Check out our solutions: websites, seo, social media, digital marketing' />
                <link rel='canonical' href='/solutions' />
            </Helmet>
            <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
                <SolutionCategories></SolutionCategories>
            </MantineProvider>
        </>
    )
}