import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { HeaderMenu } from '../../components/HeaderMenu';
import { Footer } from '../../components/Footer';
import { SeoBanner } from '../../components/SeoBanner';
import { SeoKeyAreas } from '../../components/SeoKeyAreas';
import { SeoEffects } from '../../components/SeoEffects';
import { SeoProcess } from '../../components/SeoProcess';
import { SeoOffer } from '../../components/SeoOffer';

export const getStaticProps = async ({ locale } : any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>SEO | Jeli Digital Agency</title>
        <meta name='description' content="You don't have to look for customers, they are already looking for you. Just let them know you exist." />
        <link rel='canonical' href='/search-engine-optimization' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderMenu />
      <SeoBanner />
      <SeoKeyAreas />
      <SeoEffects />
      <SeoProcess />
      <SeoOffer />
      <Footer />
    </>
  )
}
