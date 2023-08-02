import { ThemeIcon, Text, Title, Container, SimpleGrid, createStyles, rem } from '@mantine/core';
import { IconCameraPlus , IconUserStar, IconMessages, IconAd, IconArticle } from '@tabler/icons-react';


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
        icon: IconCameraPlus ,
        title: 'Content Creation',
        description:
            " Social media marketing involves producing various types of content, such as text posts, images, videos, infographics, and interactive content, tailored to the preferences of the target audience and the specific platform.",
    },
    {
        icon: IconMessages,
        title: 'Management',
        description:
            'Managing social media accounts involves posting content regularly, responding to comments and messages, monitoring trends, and engaging with followers to build a loyal community.',
    },
    {
        icon: IconAd,
        title: 'Advertising',
        description:
            "Paid social media advertising allows businesses to reach a wider audience, target specific demographics, and promote their products or services to potential customers.",
    },
    {
        icon: IconUserStar,
        title: 'Influencer Marketing',
        description:
            'Collaborating with social media influencers, who have a significant and engaged following, can help businesses reach their target audience through authentic and trusted recommendations.',
    },
    {
        icon: IconArticle,
        title: 'Many more...',
        description:
            "Social media marketing is a dynamic and constantly evolving field. Check out our blog for up-to-date knowledge.",
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


export function SocialMediaStrategy() {
    const { classes } = useStyles();
    const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

    return (
        <div className={classes.wrapper}>
            <Container size={1400}>
                <Container p={0} size={800}>
                    <Title order={2} className={classes.title}>
                        Social media marketing strategy
                    </Title>
                    <Text className={classes.description}>
                        There are many ways to promote your products, services and brands on social media platforms. Depending on your business and marketing goals, you should build a strategy based on a combination of the following elements:
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