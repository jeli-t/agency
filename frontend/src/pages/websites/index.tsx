import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { HeaderMenu } from '../../components/HeaderMenu';
import { Footer } from '../../components/Footer';
import { WebsitesBanner } from '../../components/WebsitesBanner';
import { GoodWebsite } from '../../components/GoodWebsite';
import { BuildWebsite } from '../../components/BuildWebsite';
import { WebsitesProcess } from '../../components/WebsitesProcess';
import { WebsitesOffer } from '../../components/WebsitesOffer';

export const getStaticProps = async ({ locale } : any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})

export default function Websites() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Websites  | Jeli Digital Agency</title>
        <meta name='description' content="Web Design, UI/UX, development, hosting, domains. Everything to make your business visible online." />
        <link rel='canonical' href='/websites' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderMenu />
      <WebsitesBanner />
      <GoodWebsite />
      <BuildWebsite />
      <WebsitesProcess />
      <WebsitesOffer />
      <Footer />
    </>
  )
}
