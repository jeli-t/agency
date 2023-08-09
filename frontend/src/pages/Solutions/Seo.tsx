import { MantineProvider, useMantineTheme } from '@mantine/core';
import { SeoBanner } from '../../components/SeoBanner';
import { SeoKeyAreas } from '../../components/SeoKeyAreas';
import { Helmet } from 'react-helmet-async';
import { SeoEffects } from '../../components/SeoEffects';
import { SeoProcess } from '../../components/SeoProcess';
import { SeoOffer } from '../../components/SeoOffer';


export default function Seo() {
    const mainTheme = useMantineTheme();

    return (
        <>
        <Helmet>
            <title>SEO | Jeli Digital Agency</title>
            <meta name='description' content="You don't have to look for customers, they are already looking for you. Just let them know you exist." />
            <link rel='canonical' href='/search-engine-optimization' />
        </Helmet>
            <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
                <SeoBanner></SeoBanner>
                <SeoKeyAreas></SeoKeyAreas>
                <SeoEffects></SeoEffects>
                <SeoProcess></SeoProcess>
                <SeoOffer></SeoOffer>
            </MantineProvider>
        </>
    )
}