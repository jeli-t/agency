import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { HeaderMenu } from '../../components/HeaderMenu';
import { Footer } from '../../components/Footer';
import { DigitalMarketingBanner } from '../../components/DigitalMarketingBanner';
import { DigitalMarketingChannels } from '../../components/DigitalMarketingChannels';
import { DigitalMarketingStrategy } from '../../components/DigitalMarketingStrategy';
import { OurProcess } from '../../components/OurProcess';
import { DigitalMarketingOffer } from '../../components/DigitalMarketingOffer';

export const getStaticProps = async ({ locale } : any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})

export default function DigitalMarketing() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Digital Marketing | Jeli Digital Agency</title>
        <meta name='description' content='Google Ads? Running a blog about your business and industry? Mailing and newsletters? Courses? Here you will find plenty of ideas on how to grow your business online.' />
        <link rel='canonical' href='/digital-marketing' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderMenu />
      <DigitalMarketingBanner />
      <DigitalMarketingChannels />
      <DigitalMarketingStrategy />
      <OurProcess />
      <DigitalMarketingOffer />
      <Footer />
    </>
  )
}
