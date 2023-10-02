import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { HeaderMenu } from '../../components/HeaderMenu';
import { Footer } from '../../components/Footer';
import { GetStartedBanner } from '../../components/GetStartedBanner';
import { Survey } from '../../components/Survey';


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
        <title>Get started | Jeli Digital Agency</title>
        <meta name='description' content="Not sure where to start? Answer a few questions below for personalized suggestions." />
        <link rel='canonical' href='/get-started' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderMenu />
      <GetStartedBanner />
      <Survey />
      <Footer />
    </>
  )
}
