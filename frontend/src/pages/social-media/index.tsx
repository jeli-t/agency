import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { HeaderMenu } from '../../components/HeaderMenu';
import { Footer } from '../../components/Footer';
import { SocialMediaBanner } from '../../components/SocialMediaBanner';
import { SocialMediaStrategy } from '../../components/SocialMediaStrategy';
import { SocialMediaWorth } from '../../components/SocialMediaWorth';
import { SocialMediaProcess } from '../../components/SocialMediaProcess';
import { SocialMediaOffer } from '../../components/SocialMediaOffer';
export const getStaticProps = async ({ locale } : any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})

export default function SocialMedia() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Social media | Jeli Digital Agency</title>
        <meta name='description' content="Social media is one of the most important elements of building a brand nowadays. Social media is also one of the best places to run advertising campaigns and reach new customers." />
        <link rel='canonical' href='/search-engine-optimization' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderMenu />
      <SocialMediaBanner />
      <SocialMediaStrategy />
      <SocialMediaWorth />
      <SocialMediaProcess />
      <SocialMediaOffer />
      <Footer />
    </>
  )
}
