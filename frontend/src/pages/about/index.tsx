import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { HeaderMenu } from '../../components/HeaderMenu';
import { Footer } from '../../components/Footer';
import { AboutUs } from '../../components/AboutUs';
import { OurProcess } from '../../components/OurProcess'
import { FaqSection } from '../../components/FaqSection';


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
        <title>About Us | Jeli Digital Agency</title>
        <meta name='description' content="Jeli Digital Agency is a modern company that offers a comprehensive approach to online marketing, from website to social media." />        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel='canonical' href='/about' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderMenu />
      <AboutUs />
      <OurProcess />
      <FaqSection />
      <Footer />
    </>
  )
}
