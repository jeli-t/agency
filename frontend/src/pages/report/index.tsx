import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { HeaderMenu } from '../../components/HeaderMenu';
import { Footer } from '../../components/Footer';
import { ReportBanner } from '../../components/ReportBanner';

export const getStaticProps = async ({ locale } : any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})

export default function Report() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Parsonalized report | Jeli Digital Agency</title>
        <meta name='description' content='We are preparing a report for you. It should be ready within 24 hours.' />
        <link rel='canonical' href='/report' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderMenu />
      <ReportBanner />
      <Footer />
    </>
  )
}
