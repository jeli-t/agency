import { useEffect, useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme, AppShell } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocalStorage } from '@mantine/hooks';
import { HeaderMenu } from './components/HeaderMenu';

import HomePage from './pages/HomePage';
import About from './pages/About';
import UnderConstructionPage from './pages/UnderConstructionPage';
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
                <BrowserRouter>
                    <AppShell header={<HeaderMenu />} padding={0}>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='/portfolio' element={<UnderConstructionPage />} />
                            <Route path='/blog' element={<UnderConstructionPage />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/contact' element={<UnderConstructionPage />} />
                            <Route path='/get_started' element={<UnderConstructionPage />} />
                            <Route path='*' element={<NotFoundPage />} />
                        </Routes>
                    </AppShell>
                </BrowserRouter>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}