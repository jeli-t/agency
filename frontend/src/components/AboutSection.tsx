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
            marginTop: 20,
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
        fontWeight: 600,
        padding: 5,

        [theme.fn.smallerThan('lg')]: {
            fontSize: rem(20),
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(16),
        },
    },
}));

const features = [
{
    icon: IconWorldWww,
    title: 'Websites',
    description: 'Design, UI/UX, development, hosting, domains',
},
{
    icon: IconSearch,
    title: 'Search Engine Optimization',
    description: 'SEO, SEM, Google Business Profil',
},
{
    icon: IconBrandInstagram,
    title: 'Social media',
    description: 'Management, Advertising campaigns',
},
{
    icon: IconAd,
    title: 'Other',
    description: 'Google Ads, blogs, mailing and newsletter',
},
];

export function AboutSection() {
const { classes } = useStyles();

const items = features.map((feature) => (
    <div key={feature.title}>
        <ThemeIcon
            size={50}
            radius="md"
            variant="gradient"
            gradient={{ deg: 133, from: 'orange', to: 'red' }}
        >
            <feature.icon size={rem(26)} stroke={1.5} />
        </ThemeIcon>
        <Text fz={22} mt="sm" fw={600}>
            {feature.title}
        </Text>
        <Text>
            {feature.description}
        </Text>
    </div>
));

return (
    <div className={classes.wrapper}>
        <Grid gutter={50} className={classes.grid}>
            <Col span={12} md={5}>
                <Title order={2} className={classes.title}>
                    Make yourself <span className={classes.highlight}>visible</span>
                </Title>
                <Text className={classes.text}>
                    If you are not on the Internet, you do not exist. Digital marketing is the fastest way to grow your business nowadays. Check out our solutions and gain a competitive edge in the digital world.
                </Text>

            </Col>
            <Col span={12} md={7}>
                <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                    {items}
                </SimpleGrid>
            </Col>
        </Grid>
    </div>
);
}