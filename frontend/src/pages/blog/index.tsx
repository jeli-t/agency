import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { HeaderMenu } from '../../components/HeaderMenu';
import { Footer } from '../../components/Footer';
import { BlogBanner } from '../../components/BlogBanner';
import { BlogGrid } from '../../components/BlogGrid';


export const getStaticProps = async ({ locale } : any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'blog']))
  }
})

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Blog | Jeli Digital Agency</title>
        <meta name='description' content="Here we share our knowledge and experience in website development, SEO, social media and digital marketing. Everything that will make you visible on the Internet." />
        <link rel='canonical' href='/blog' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderMenu />
      <BlogBanner />
      <BlogGrid />
      <Footer />
    </>
  )
}
