import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { HeaderMenu } from '../components/HeaderMenu';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ProductsSection } from '../components/ProductsSection';
import { CallToAction } from '../components/CallToAction';
import { ContactSection } from '../components/ContactSection';
import { FaqSection } from '../components/FaqSection';


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
        <title>Digital Agency | Websites | SEO | Social media</title>
        <meta name='description' content='Comprehensive and tailored digital marketing for businesses. Profesional Websites, Search Engine Optimization, Social media' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel='canonical' href='/' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderMenu />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <CallToAction />
      <ContactSection />
      <FaqSection />
      <Footer />
    </>
  )
}
