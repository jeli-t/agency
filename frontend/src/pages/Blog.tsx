import { MantineProvider, useMantineTheme } from '@mantine/core';
import { BlogBanner } from '../components/BlogBanner';
import { Helmet } from 'react-helmet-async';
import { BlogGrid } from '../components/BlogGrid';


export default function Blog() {
    const mainTheme = useMantineTheme();

    return (
        <>
            <Helmet>
                <title>Blog | Jeli Digital Agency</title>
                <meta name='description' content="Here we share our knowledge and experience in website development, SEO, social media and digital marketing. Everything that will make you visible on the Internet." />
                <link rel='canonical' href='/blog' />
            </Helmet>
            <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
                <BlogBanner></BlogBanner>
                <BlogGrid></BlogGrid>
            </MantineProvider>
        </>
    )
}