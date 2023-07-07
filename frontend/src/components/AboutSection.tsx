import {
    createStyles,
    Title,
    SimpleGrid,
    Text,
    Button,
    ThemeIcon,
    Grid,
    Col,
    rem,
} from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';

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
    icon: IconReceiptOff,
    title: 'Free and open source',
    description: 'All packages are published under MIT license, you can use Mantine in any project',
},
{
    icon: IconFileCode,
    title: 'TypeScript based',
    description: 'Build type safe applications, all components and hooks export types',
},
{
    icon: IconCircleDotted,
    title: 'No annoying focus ring',
    description:
    'With new :focus-visible selector focus ring will appear only when user navigates with keyboard',
},
{
    icon: IconFlame,
    title: 'Flexible',
    description:
    'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
},
];

export function AboutSection() {
const { classes } = useStyles();

const items = features.map((feature) => (
    <div key={feature.title}>
    <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'orange', to: 'red' }}
    >
        <feature.icon size={rem(26)} stroke={1.5} />
    </ThemeIcon>
    <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
    </Text>
    <Text fz="sm">
        {feature.description}
    </Text>
    </div>
));

return (
    <div className={classes.wrapper}>
        <Grid gutter={80} className={classes.grid}>
            <Col span={12} md={5}>
            <Title className={classes.title} order={2}>
                jeli.pl digital agency
            </Title>
            <Text className={classes.text}>
                Build fully functional accessible web applications faster than ever - Mantine includes
                more than 120 customizable components and hooks to cover you in any situation
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