import { useEffect, useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme, AppShell } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocalStorage } from '@mantine/hooks';
import { HeaderMenu } from './components/HeaderMenu';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';


export default function App() {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'jeli-color-scheme',
        defaultValue: 'dark',
        getInitialValueInEffect: true,
    });

    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider withGlobalStyles withNormalizeCSS theme={{primaryColor: 'orange', colorScheme}}>
                <AppShell header={<HeaderMenu />}>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='*' element={<NotFoundPage />} />
                        </Routes>
                    </BrowserRouter>
                </AppShell>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}