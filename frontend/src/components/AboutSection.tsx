import {
    createStyles,
    Title,
    SimpleGrid,
    Text,
    ThemeIcon,
    Grid,
    Col,
    rem,
} from '@mantine/core';
import { IconWorldWww, IconSearch, IconAd, IconBrandInstagram } from '@tabler/icons-react';
import Link from 'next/link'
import { useTranslation } from 'next-i18next';


const useStyles = createStyles((theme) => ({
    wrapper: {
        height: 'fit',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : theme.colors.gray[1],
    },

    grid: {
        width: '70%',
        margin: 100,
        padding: 0,

        [theme.fn.smallerThan('md')]: {
            width: '100%',
            margin: 0,
            marginTop: 40,
            marginBottom: 20,
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(40),
        fontWeight: 700,
        margin: 10,
    
        [theme.fn.smallerThan('xs')]: {
          fontSize: rem(30),
        },
    },

    highlight: {
        position: 'relative',
        backgroundColor: theme.primaryColor,
        borderRadius: theme.radius.sm,
        padding: `${rem(4)} ${rem(12)}`,
    },

    text: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(24),
        fontWeight: 400,
        padding: 5,

        [theme.fn.smallerThan('lg')]: {
            fontSize: rem(20),
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(16),
        },
    },

    link: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        textDecoration: 'none',
    },

    tile: {
        transition: 'transform 150ms ease, box-shadow 150ms ease',

        '&:hover': {
            transform: 'scale(1.02)',
          },
    },
}));

const features = [
{
    icon: IconWorldWww,
    title: 'about_section.feature1',
    id: '/#Websites',
    description: 'about_section.description1',
},
{
    icon: IconSearch,
    title: 'about_section.feature2',
    id: '/#Search-Engine-Optimization',
    description: 'about_section.description2',
},
{
    icon: IconBrandInstagram,
    title: 'about_section.feature3',
    id: '/#Social-media',
    description: 'about_section.description3',
},
{
    icon: IconAd,
    title: 'about_section.feature4',
    id: '/#Digital-marketing',
    description: 'about_section.description4',
},
];

export function AboutSection() {
    const { classes } = useStyles();
    const { t } = useTranslation();

    const items = features.map((feature) => (
        <Link href={feature.id} className={classes.link}>
            <div key={feature.title} className={classes.tile}>
                <ThemeIcon
                    size={50}
                    radius="md"
                    variant="gradient"
                    gradient={{ deg: 133, from: 'orange', to: 'red' }}
                >
                    <feature.icon size={rem(26)} stroke={1.5} />
                </ThemeIcon>
                <Text fz={22} mt="sm" fw={600}>
                    {t(feature.title)}
                </Text>
                <Text>
                    {t(feature.description)}
                </Text>
            </div>
        </Link>
    ));

    return (
        <section id='Make-yourself-visible' className={classes.wrapper}>
            <Grid gutter={50} className={classes.grid}>
                <Col span={12} md={5}>
                    <Title order={2} className={classes.title}>
                        {t("about_section.title")}
                        <span className={classes.highlight}>
                            {t("about_section.title_highlight")}
                        </span>
                    </Title>
                    <Text className={classes.text}>
                        {t("about_section.description")}
                    </Text>

                </Col>
                <Col span={12} md={7}>
                    <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                        {items}
                    </SimpleGrid>
                </Col>
            </Grid>
        </section>
    );
}