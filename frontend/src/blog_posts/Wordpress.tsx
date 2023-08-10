import { Container, MantineProvider, createStyles, useMantineTheme, Title, Text, rem, AspectRatio, Image, Card } from '@mantine/core';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import cover from './../assets/blog/wordpress.jpg'


const mockdata = [
    {
      url: 'blog_post1.url',
      title: 'blog_post1.title',
      date: 'blog_post1.date',
      cover: cover,
    },
  ];


const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        marginTop: rem(80),
        marginBottom: rem(80),

        [theme.fn.smallerThan('sm')]: {
            marginTop: rem(60),
            marginBottom: rem(60),
        },
    },

    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : theme.colors.gray[1],
    },

    title: {
        textAlign: 'left',
        fontWeight: 800,
        fontSize: rem(40),
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        marginBottom: theme.spacing.xs,
        fontFamily: `Roboto, ${theme.fontFamily}`,

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(28),
            textAlign: 'left',
        },
    },

    description: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(24),
        fontWeight: 500,
        textAlign: 'left',

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(20),
            textAlign: 'left',
        },
    },
}));


export default function Wordpress() {
    const mainTheme = useMantineTheme();
    const { classes } = useStyles();
    const { t } = useTranslation(['blog']);

    const card = mockdata.map((article) => (
        <Card key={article.title} p="md" radius="md" className={classes.card}>
            <AspectRatio ratio={1920 / 1080}>
                <img src={t(`${article.cover}`)} alt={t(`${article.title}`)} title={t(`${article.title}`)} loading='lazy' width={424} height={238} />
            </AspectRatio>
            <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
                {t(`${article.date}`)}
            </Text>
            <Text className={classes.title} mt={5}>
                {t(`${article.title}`)}
            </Text>
        </Card>
    ));

    return (
        <>
            <Helmet>
                <title>Blog | Jeli Digital Agency</title>
                <meta name='description' content="" />
                <link rel='canonical' href='/' />
            </Helmet>
            <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
                <Container py='xl'>
                    {card}
                </Container>
            </MantineProvider>
        </>
    )
}