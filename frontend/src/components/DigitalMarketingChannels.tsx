import { ThemeIcon, Text, Title, Container, SimpleGrid, createStyles, rem } from '@mantine/core';
import { IconWorldWww , IconSearch, IconThumbUp, IconAd, IconArticle, IconPencil, IconHandClick, IconSchool, IconMail } from '@tabler/icons-react';


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

    tile: {
        transition: 'transform 150ms ease, box-shadow 150ms ease',

        '&:hover': {
            transform: 'scale(1.02)',
          },
    },
}));


export const MOCKDATA = [
    {
        icon: IconWorldWww ,
        title: 'Website',
        description:
            'Having a website allows you to establish an online presence, making it easier for people to find and learn about your business, products and services.',
    },
    {
        icon: IconThumbUp,
        title: 'Social media',
        description:
            'By creating and sharing content on social media channels, you can connect with your target audiences, increase brand visibility and drive traffic to your website.',
    },
    {
        icon: IconSearch,
        title: 'Search Engine Optimization',
        description:
            'A good website is optimized for search engines, making it more likely to appear in search results. Higher page ranking = more leads.',
    },
    {
        icon: IconAd,
        title: 'Advertising',
        description:
            'You can run paid advertising campaigns using Google Ads or social media platforms such as Facebook, Instagram and others.'
    },
    {
        icon: IconPencil,
        title: 'Blog',
        description:
            'Creating valuable and relevant content can position a business as an industry authority, attract potential customers, and foster trust with the audience.'
    },
    {
        icon: IconHandClick,
        title: 'Affiliate Marketing',
        description:
            "This channel involves collaborating with partners who promote a business's products or services in exchange for a commission for each sale generated through their efforts."
    },
    {
        icon: IconSchool,
        title: 'Webinars and podcasts',
        description:
            'You can hold webinars or host podcasts to educate, engage and build relationships with your target audience.',
    },
    {
        icon: IconMail,
        title: 'Email Marketing',
        description:
            'Companies use email to send targeted messages, newsletters and promotions to a list of subscribers and potential customers.',
    },
    {
        icon: IconArticle,
        title: 'Many more...',
        description:
            'If you are looking for more digital marketing knowledge, check out our blog.',
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
        <div className={classes.tile}>
            <ThemeIcon variant="filled" size={50} radius={40}>
                <Icon size="2rem" stroke={2} />
            </ThemeIcon>
            <Title order={3} className={classes.feature_title}>
                {title}
            </Title>
            <Text className={classes.feature_description}>
                {description}
            </Text>
        </div>
    );
}


export function DigitalMarketingChannels() {
    const { classes } = useStyles();
    const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

    return (
        <div className={classes.wrapper}>
            <Container size={1400}>
                <Container p={0} size={800}>
                    <Title order={2} className={classes.title}>
                        Digital marketing channels
                    </Title>
                    <Text className={classes.description}>
                        There are many ways to reach potential customers and build your brand through digital marketing. Here are the most popular and effective marketing channels and techniques:
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