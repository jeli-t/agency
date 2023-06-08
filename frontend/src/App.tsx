import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';


export default function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </MantineProvider>
    );
}