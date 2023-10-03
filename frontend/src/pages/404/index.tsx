import Head from 'next/head'
import { createStyles, Title, Text, Button, Container, Group, rem } from '@mantine/core';
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { HeaderMenu } from '../../components/HeaderMenu';
import { Footer } from '../../components/Footer';


export const getStaticProps = async ({ locale } : any) => ({
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  })


const useStyles = createStyles((theme) => ({
    root: {
        paddingTop: rem(200),
        paddingBottom: rem(200),
    },

    label: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: rem(220),
        lineHeight: 1,
        marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

        [theme.fn.smallerThan('sm')]: {
        fontSize: rem(120),
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        textAlign: 'center',
        fontWeight: 900,
        fontSize: rem(38),

        [theme.fn.smallerThan('sm')]: {
        fontSize: rem(32),
        },
    },

    description: {
        maxWidth: rem(500),
        margin: 'auto',
        marginTop: theme.spacing.xl,
        marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    },
}));

export default function NotFoundPage() {
    const { classes } = useStyles();
    const { t } = useTranslation();


    return (
        <>
            <Head>
                <title>Jeli Digital Agency | Websites | SEO | Social media</title>
                <meta name='description' content='404' />
                <link rel="icon" href="/favicon.ico" />
                <meta name="robots" content="Noindex" />
            </Head>
            <HeaderMenu />
            <Container className={classes.root}>
                <div className={classes.label}>404</div>
                <Title className={classes.title}>
                    {t("404.title")}
                </Title>
                <Text color="dimmed" size="lg" align="center" className={classes.description}>
                    {t("404.description")}
                </Text>
                <Group position="center">
                <Link href='/'>
                    <Button color='orange' variant="light" size="md">
                        {t("404.button")}
                    </Button>
                </Link>
                </Group>
            </Container>
            <Footer />
        </>
  );
}