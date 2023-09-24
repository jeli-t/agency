import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { HeaderMenu } from '../../components/HeaderMenu';
import { Footer } from '../../components/Footer';
import { ContactSection } from '../../components/ContactSection';
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
        <title>Contact | Jeli Digital Agency</title>
        <meta name='description' content="Write us what you need. We will answer all your questions. If you want to use our services, we can arrange a video conference to discuss the details." />        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel='canonical' href='/contact' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderMenu />
      <ContactSection />
      <FaqSection />
      <Footer />
    </>
  )
}
