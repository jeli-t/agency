import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { HeaderMenu } from '../../components/HeaderMenu';
import { Footer } from '../../components/Footer';
import { SolutionCategories } from '../../components/SolutionCategories';


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
        <title>Solutions | Jeli Digital Agency</title>
        <meta name='description' content='Check out our solutions: websites, seo, social media, digital marketing' />
        <link rel='canonical' href='/solutions' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderMenu />
      <SolutionCategories />
      <Footer />
    </>
  )
}
