import { ThemeIcon, Text, Title, Container, SimpleGrid, createStyles, rem } from '@mantine/core';
import { IconMoodHappy , IconSearch, IconDeviceMobile, IconBrandSpeedtest, IconLetterCase, IconArticle } from '@tabler/icons-react';
import { useTranslation } from 'next-i18next';


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
        marginTop: 10,
        marginBottom: 10,

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
        icon: IconMoodHappy ,
        title: 'good_website.feature1',
        description: "good_website.description1"
    },
    {
        icon: IconDeviceMobile,
        title: 'good_website.feature2',
        description: "good_website.description2"
    },
    {
        icon: IconLetterCase,
        title: 'good_website.feature3',
        description: "good_website.description3"
    },
    {
        icon: IconSearch,
        title: 'good_website.feature4',
        description: "good_website.description4"
    },
    {
        icon: IconBrandSpeedtest,
        title: 'good_website.feature5',
        description: "good_website.description5"
    },
    {
        icon: IconArticle,
        title: 'good_website.feature6',
        description: "good_website.description6"
    },
];

interface FeatureProps {
    icon: React.FC<any>;
    title: React.ReactNode;
    description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
    const { classes } = useStyles();
    const { t } = useTranslation();

    return (
        <div className={classes.tile}>
            <ThemeIcon variant="filled" size={50} radius={40}>
                <Icon size="2rem" stroke={2} />
            </ThemeIcon>
            <Title order={3} className={classes.feature_title}>
                {t(`${title}`)}
            </Title>
            <Text className={classes.feature_description}>
                {t(`${description}`)}
            </Text>
        </div>
    );
}


export function GoodWebsite() {
    const { classes } = useStyles();
    const { t } = useTranslation();
    
    const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

    return (
        <div className={classes.wrapper}>
            <Container size={1400}>
                <Container p={0} size={800}>
                    <Title order={2} className={classes.title}>
                        {t("good_website.title")}
                    </Title>
                    <Text className={classes.description}>
                        {t("good_website.text")}
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