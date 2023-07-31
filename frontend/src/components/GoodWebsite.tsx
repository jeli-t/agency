import { ThemeIcon, Text, Title, Container, SimpleGrid, createStyles, rem } from '@mantine/core';
import { IconMoodHappy , IconSearch, IconDeviceMobile, IconBrandSpeedtest, IconLetterCase, IconArticle } from '@tabler/icons-react';


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
        icon: IconMoodHappy ,
        title: 'User-Friendly Interface',
        description:
            'A good website is easy to navigate, with a clear and intuitive user interface. Visitors should be able to find information quickly and access important sections without confusion. A well-organized menu and logical page layout are essential.',
    },
    {
        icon: IconDeviceMobile,
        title: 'Mobile Responsiveness',
        description:
            'With the increasing use of mobile devices, a good website must be optimized for various screen sizes. It should adapt seamlessly to different devices, ensuring that users have a positive experience regardless of whether they access the site on a desktop, tablet, or smartphone.',
    },
    {
        icon: IconLetterCase,
        title: 'High-Quality Content',
        description:
            'Content is king, and a good website provides valuable, relevant, and well-presented content to its visitors. This includes engaging text, captivating images, informative videos, and other multimedia elements that enhance the user experience.',
    },
    {
        icon: IconSearch,
        title: 'Search Engine Optimization',
        description:
            'A good website is optimized for search engines, making it more likely to appear in search results. Proper use of keywords, meta tags, and high-quality content are some of the elements that contribute to good SEO practices.',
    },
    {
        icon: IconBrandSpeedtest,
        title: 'Fast Loading Times',
        description:
            'Users have limited patience for slow-loading websites. A good website is optimized for speed, ensuring that pages load quickly. This optimization can include image compression, efficient coding, and reliable hosting.',
    },
    {
        icon: IconArticle,
        title: 'Many more...',
        description:
            'There are many other things that are important if you want to build a successful website. If you are looking for more web development knowledge, check out our blog.',
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
            <Title order={3} className={classes.feature_title}>
                {title}
            </Title>
            <Text className={classes.feature_description}>
                {description}
            </Text>
        </div>
    );
}


export function GoodWebsite() {
    const { classes } = useStyles();
    const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

    return (
        <div className={classes.wrapper}>
            <Container size={1400}>
                <Container p={0} size={800}>
                    <Title order={2} className={classes.title}>
                        What makes a good website?
                    </Title>
                    <Text className={classes.description}>
                        Website development involves multiple elements that together contribute to an excellent user experience and a successful online presence. If you want to build a good website for your business, you need to consider these few things.
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