import { Container, MantineProvider, createStyles, useMantineTheme, Title, Text, rem, AspectRatio, Image, Card, List } from '@mantine/core';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import cover from './../assets/blog/wordpress.jpg'
import { WebsitesOffer } from '../components/WebsitesOffer';


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
        fontSize: rem(30),
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        marginBottom: theme.spacing.xs,
        fontFamily: `Roboto, ${theme.fontFamily}`,

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(20),
            textAlign: 'left',
        },
    },

    header: {
        textAlign: 'left',
        fontWeight: 600,
        fontSize: rem(26),
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        marginBottom: theme.spacing.xs,
        fontFamily: `Roboto, ${theme.fontFamily}`,

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(22),
            textAlign: 'left',
        },
    },

    text: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(20),
        fontWeight: 500,
        textAlign: 'left',

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(16),
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
            <Title order={1} className={classes.title} mt={5}>
                {t(`${article.title}`)}
            </Title>
        </Card>
    ));

    return (
        <>
            <Helmet>
                <title>Is WordPress right for you? | Jeli Digital Agency</title>
                <meta name='description' content="Is WordPress right for you? What you can do with WordPress? Is WordPress good? How expensive is WordPress website? Is it hard to learn Wordpress? Here we answere all these questions." />
                <link rel='canonical' href='/blog/is-wordpress-right-for-you' />
            </Helmet>
            <MantineProvider theme={mainTheme} withGlobalStyles withNormalizeCSS>
                <Container p='md'>
                    {card}

                    {/* content */}
                    <Text className={classes.text} mt={'4rem'}>
                        {t("blog_post1.description")}
                    </Text>
                    <Title order={2} className={classes.header} mt={'4rem'}>
                        {t("blog_post1.header1")}
                    </Title>
                    <List type="unordered" withPadding className={classes.text}>
                        <List.Item mt={'md'}><span style={{fontWeight: "bolder"}}>{t("blog_post1.type1")}</span>{t("blog_post1.type1_description")}</List.Item>
                        <List.Item mt={'md'}><span style={{fontWeight: "bolder"}}>{t("blog_post1.type2")}</span>{t("blog_post1.type2_description")}</List.Item>
                        <List.Item mt={'md'}><span style={{fontWeight: "bolder"}}>{t("blog_post1.type3")}</span>{t("blog_post1.type3_description")}</List.Item>
                        <List.Item mt={'md'}><span style={{fontWeight: "bolder"}}>{t("blog_post1.type4")}</span>{t("blog_post1.type4_description")}</List.Item>
                    </List>
                    <Title order={2} className={classes.header} mt={'4rem'}>
                        {t("blog_post1.header2")}
                    </Title>
                    <Text className={classes.text} style={{fontWeight: "bolder"}} mt={'1rem'}>
                        {t("blog_post1.pros")}
                    </Text>
                    <List type="ordered" withPadding className={classes.text}>
                        <List.Item mt={'md'}><span style={{fontWeight: "bolder"}}>{t("blog_post1.pros1")}</span>{t("blog_post1.pros1_description")}</List.Item>
                        <List.Item mt={'md'}><span style={{fontWeight: "bolder"}}>{t("blog_post1.pros2")}</span>{t("blog_post1.pros2_description")}</List.Item>
                        <List.Item mt={'md'}><span style={{fontWeight: "bolder"}}>{t("blog_post1.pros3")}</span>{t("blog_post1.pros3_description")}</List.Item>
                        <List.Item mt={'md'}><span style={{fontWeight: "bolder"}}>{t("blog_post1.pros4")}</span>{t("blog_post1.pros4_description")}</List.Item>
                    </List>
                    <Text className={classes.text} style={{fontWeight: "bolder"}} mt={'1rem'}>
                        {t("blog_post1.cons")}
                    </Text>
                    <List type="ordered" withPadding className={classes.text}>
                        <List.Item mt={'md'}><span style={{fontWeight: "bolder"}}>{t("blog_post1.cons1")}</span>{t("blog_post1.cons1_description")}</List.Item>
                        <List.Item mt={'md'}><span style={{fontWeight: "bolder"}}>{t("blog_post1.cons2")}</span>{t("blog_post1.cons2_description")}</List.Item>
                        <List.Item mt={'md'}><span style={{fontWeight: "bolder"}}>{t("blog_post1.cons3")}</span>{t("blog_post1.cons3_description")}</List.Item>
                    </List>
                    <Title order={2} className={classes.header} mt={'4rem'}>
                        {t("blog_post1.header3")}
                    </Title>
                    <Text className={classes.text} mt={'1rem'}>
                        {t("blog_post1.text3")}
                    </Text>
                    <List type="ordered" withPadding className={classes.text}>
                        <List.Item mt={'md'}><span style={{fontWeight: "bolder"}}>{t("blog_post1.cost1")}</span>{t("blog_post1.cost1_description")}</List.Item>
                        <List.Item mt={'md'}><span style={{fontWeight: "bolder"}}>{t("blog_post1.cost2")}</span>{t("blog_post1.cost2_description")}</List.Item>
                        <List.Item mt={'md'}><span style={{fontWeight: "bolder"}}>{t("blog_post1.cost3")}</span>{t("blog_post1.cost3_description")}</List.Item>
                    </List>
                    <Title order={2} className={classes.header} mt={'4rem'}>
                        {t("blog_post1.header4")}
                    </Title>
                    <Text className={classes.text} mt={'1rem'}>
                        {t("blog_post1.text4")}
                    </Text>
                    <List type="ordered" withPadding className={classes.text}>
                        <List.Item mt={'md'}><span style={{fontWeight: "bolder"}}>{t("blog_post1.point1")}</span>{t("blog_post1.point1_description")}</List.Item>
                        <List.Item mt={'md'}><span style={{fontWeight: "bolder"}}>{t("blog_post1.point2")}</span>{t("blog_post1.point2_description")}</List.Item>
                        <List.Item mt={'md'}><span style={{fontWeight: "bolder"}}>{t("blog_post1.point3")}</span>{t("blog_post1.point3_description")}</List.Item>
                    </List>
                    <Text className={classes.text} mt={'4rem'} mb={'4rem'}>
                        {t("blog_post1.conclusion")}
                    </Text>

                </Container>

                {/* call to action */}
                <WebsitesOffer></WebsitesOffer>
            </MantineProvider>
        </>
    )
}