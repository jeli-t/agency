import { ThemeIcon, Text, Title, Container, SimpleGrid, createStyles, rem } from '@mantine/core';
import { IconKey , IconCurrentLocation, IconFileSettings, IconBuildingBroadcastTower, IconLetterCase, IconArticle } from '@tabler/icons-react';


const useStyles = createStyles((theme) => ({
    wrapper: {
        marginTop: rem(120),
        marginBottom: rem(100),
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

    feature_title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(24),
        fontWeight: 600,

        [theme.fn.smallerThan('lg')]: {
            fontSize: rem(20),
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(18),
        },
    },

    feature_description: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(20),
        fontWeight: 500,

        [theme.fn.smallerThan('lg')]: {
            fontSize: rem(18),
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(16),
        },
    },
}));


export const MOCKDATA = [
    {
        icon: IconKey ,
        title: 'Keyword Research',
        description:
            "Identifying and targeting relevant keywords and phrases that users frequently use to search for products, services, or information related to your website's content.",
    },
    {
        icon: IconFileSettings,
        title: 'On-Page Optimization',
        description:
            'Optimizing individual web pages by incorporating targeted keywords into titles, meta tags, headings, content, and URLs. This also involves improving the overall user experience, ensuring the website is easy to navigate and read.',
    },
    {
        icon: IconBuildingBroadcastTower,
        title: 'Off-Page Optimization',
        description:
            "Building the website's authority and credibility through external factors such as backlinks (links from other websites), social media presence, and online mentions.",
    },
    {
        icon: IconCurrentLocation,
        title: 'Local SEO',
        description:
            'For businesses with a physical presence, optimizing to appear in local search results, such as Google My Business listings and local directories.',
    },
    {
        icon: IconLetterCase,
        title: 'Content Marketing',
        description:
            'Creating high-quality, valuable, and relevant content that attracts and engages users. Content marketing is essential for both on-page optimization and attracting natural backlinks.',
    },
    {
        icon: IconArticle,
        title: 'Many more...',
        description:
            "If you're looking for more SEO-related knowledge, check out our blog.",
    },
];

interface FeatureProps {
    icon: React.FC<any>;
    title: React.ReactNode;
    description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
    const { classes } = useStyles();

    return (
        <div>
            <ThemeIcon variant="filled" size={50} radius={40}>
                <Icon size="2rem" stroke={2} />
            </ThemeIcon>
            <Text className={classes.feature_title}>
                {title}
            </Text>
            <Text className={classes.feature_description}>
                {description}
            </Text>
        </div>
    );
}


export function SeoKeyAreas() {
    const { classes } = useStyles();
    const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

    return (
        <div className={classes.wrapper}>
            <Container size={1400}>
                <Container p={0} size={800}>
                    <Title order={2} className={classes.title}>
                        The key areas of SEO
                    </Title>
                    <Text className={classes.description}>
                        Search engine optimization encompasses various strategies and techniques to improve a site's visibility, rankings and overall online presence. The main areas of activity include:
                    </Text>
                </Container>
                <SimpleGrid
                    mt={60}
                    cols={3}
                    spacing={50}
                    breakpoints={[
                        { maxWidth: 980, cols: 2, spacing: 'xl' },
                        { maxWidth: 755, cols: 1, spacing: 'xl' },
                    ]}
                >
                    {features}
                </SimpleGrid>
            </Container>
        </div>
    );
}