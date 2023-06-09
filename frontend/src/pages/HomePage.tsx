import { useMantineTheme, MantineProvider, Text, Center } from '@mantine/core';
import { TypeAnimation } from 'react-type-animation';

export default function HomePage() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Center h={'100vh'}>
                <TypeAnimation
                    sequence={[
                        'jeli.pl',
                        2000,
                        'Web design',
                        1000,
                        'Web development',
                        1000,
                        'Search Engine Optimization',
                        1000,
                        'Project management',
                        1000,
                        'jeli.pl',
                    ]}
                    wrapper="span"
                    style={{ fontSize: '3em', display: 'inline-block' }}
                />
            </Center>
        </MantineProvider>
    )
}