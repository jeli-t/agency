import { MantineProvider, ColorSchemeProvider, ColorScheme, AppShell } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CookieConsent from "react-cookie-consent";
import { useLocalStorage } from '@mantine/hooks';
import ScrollToTop from './components/ScrollToTop';
import { HeaderMenu } from './components/HeaderMenu';
import { Footer } from './components/Footer';
import { useTranslation } from 'react-i18next';

// pages
import HomePage from './pages/HomePage';
import GetStarted from './pages/GetStarted';
import Report from './pages/Report';
import About from './pages/About';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import Websites from './pages/Solutions/Websites';
import DigitalMarketing from './pages/Solutions/DigitalMarketing';
import SocialMedia from './pages/Solutions/SocialMedia';
import Seo from './pages/Solutions/Seo';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PolitykaPrywatnosci from './pages/PolitykaPrywatnosci';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import UnderConstructionPage from './pages/UnderConstructionPage';
import NotFoundPage from './pages/NotFoundPage';

// blog posts
import Wordpress from './blog_posts/Wordpress';


export default function App() {
    const { t } = useTranslation();

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
                <CookieConsent style={{paddingLeft: 20, paddingRight: 20}} buttonText={t("cookie_consent.button")}>{t("cookie_consent.text1")}<a href={t("cookie_consent.privacy_link")}>{t("cookie_consent.link_text")}</a> {t("cookie_consent.text2")}</CookieConsent>
                <BrowserRouter>
                    <ScrollToTop></ScrollToTop>
                    <AppShell header={<HeaderMenu />} footer={<Footer />} padding={0}>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='/portfolio' element={<UnderConstructionPage />} />
                            <Route path='/solutions' element={<Solutions />} />
                            <Route path='/websites' element={<Websites />} />
                            <Route path='/search-engine-optimization' element={<Seo />} />
                            <Route path='/social-media' element={<SocialMedia />} />
                            <Route path='/digital-marketing' element={<DigitalMarketing />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/get-started' element={<GetStarted />} />
                            <Route path='/report' element={<Report />} />
                            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                            <Route path='/polityka-prywatnosci' element={<PolitykaPrywatnosci />} />
                            <Route path='/pricing' element={<Pricing />} />
                            <Route path='/blog' element={<Blog />} />
                            {/* blog posts */}
                            <Route path='/blog/is-wordpress-right-for-you' element={<Wordpress />} />

                            <Route path='*' element={<NotFoundPage />} />
                        </Routes>
                    </AppShell>
                </BrowserRouter>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}