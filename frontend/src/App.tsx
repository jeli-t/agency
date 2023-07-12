import { MantineProvider, ColorSchemeProvider, ColorScheme, AppShell } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CookieConsent from "react-cookie-consent";
import { useLocalStorage } from '@mantine/hooks';
import ScrollToTop from './components/ScrollToTop';
import { HeaderMenu } from './components/HeaderMenu';
import { Footer } from './components/Footer';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import Websites from './pages/Solutions/Websites';
import DigitalMarketing from './pages/Solutions/DigitalMarketing';
import SocialMedia from './pages/Solutions/SocialMedia';
import Seo from './pages/Solutions/Seo';
import Privacy from './pages/Privacy';
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
                <CookieConsent style={{paddingLeft: 20, paddingRight: 20}}>This website uses cookies. By staying on the site, you accept the cookies and <a href='/privacy'>privacy policy </a> of this website.</CookieConsent>
                <BrowserRouter>
                    <ScrollToTop></ScrollToTop>
                    <AppShell header={<HeaderMenu />} footer={<Footer />} padding={0}>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='/portfolio' element={<UnderConstructionPage />} />
                            <Route path='/solutions' element={<Solutions />} />
                            <Route path='/solutions/websites' element={<Websites />} />
                            <Route path='/solutions/seo' element={<Seo />} />
                            <Route path='/solutions/social_media' element={<SocialMedia />} />
                            <Route path='/solutions/digital_marketing' element={<DigitalMarketing />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/get_started' element={<UnderConstructionPage />} />
                            <Route path='/privacy' element={<Privacy />} />
                            <Route path='*' element={<NotFoundPage />} />
                        </Routes>
                    </AppShell>
                </BrowserRouter>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}