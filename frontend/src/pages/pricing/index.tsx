import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { HeaderMenu } from '../../components/HeaderMenu';
import { Footer } from '../../components/Footer';
import { PricingBanner } from '../../components/PricingBanner';
import { PricingCategories } from '../../components/PricingCategories';


export const getStaticProps = async ({ locale } : any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Pricing  | Jeli Digital Agency</title>
        <meta name='description' content='On this page you will find all the information about how we price our services.' />
        <link rel='canonical' href='/pricing' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderMenu />
      <PricingBanner />
      <PricingCategories />
      <Footer />
    </>
  )
}
