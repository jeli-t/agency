import { AppShell, MantineProvider, Header } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderMenu } from './components/HeaderMenu';

import HomePage from './pages/HomePage';


export default function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{primaryColor: 'orange'}}>
            <AppShell header={<HeaderMenu />}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                    </Routes>
                </BrowserRouter>
            </AppShell>
        </MantineProvider>
    );
}