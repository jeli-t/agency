import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme, Center } from '@mantine/core';
import { TypeAnimation } from 'react-type-animation';


export default function HomePage() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
                <Center h={'100vh'}>
                    <TypeAnimation
                        sequence={[
                            'jeli.pl',
                            1000,
                            'Web design',
                            500,
                            '',
                            'Web development',
                            500,
                            'Search Engine Optimization',
                            500,
                            'jeli.pl',
                            () => {
                                toggleColorScheme()
                            },
                        ]}
                        wrapper="span"
                        style={{ fontSize: '3em', display: 'inline-block' }}
                    />
                </Center>
            </MantineProvider>
        </ColorSchemeProvider>
    )
}