import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ColorSchemeProvider, ColorScheme, AppShell } from '@mantine/core';
import CookieConsent from "react-cookie-consent";
import { useLocalStorage } from '@mantine/hooks';
import { useTranslation, appWithTranslation } from 'next-i18next';


function App(props: AppProps) {
    const { Component, pageProps } = props;

    const { t } = useTranslation();

    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'jeli-color-scheme',
        defaultValue: 'dark',
        getInitialValueInEffect: true,
    });

    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    return (
        <>
            <Head>
                <title>Jeli Digital Agency</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>

            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider withGlobalStyles withNormalizeCSS theme={{primaryColor: 'orange', colorScheme}}>
                    <CookieConsent style={{paddingLeft: 20, paddingRight: 20}} buttonText={t("cookie_consent.button")}>{t("cookie_consent.text1")}<a href={t("cookie_consent.privacy_link")}>{t("cookie_consent.link_text")}</a> {t("cookie_consent.text2")}</CookieConsent>
                        <Component {...pageProps} />
                </MantineProvider>
            </ColorSchemeProvider>
        </>
    );
}

export default appWithTranslation(App)