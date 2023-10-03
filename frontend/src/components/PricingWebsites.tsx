import { Container, Title, createStyles, rem, Text, Divider } from '@mantine/core';
import { useTranslation } from 'next-i18next'


export const MOCKDATA = [
    {
        title: 'pricing_website.product1',
        description: "pricing_website.description1",
        price: "pricing_website.price1",
    },
    {
        title: 'pricing_website.product2',
        description: "pricing_website.description2",
        price: "pricing_website.price2",
    },
    {
        title: 'pricing_website.product3',
        description: "pricing_website.description3",
        price: "pricing_website.price3",
    },
    {
        title: 'pricing_website.product4',
        description: "pricing_website.description4",
        price: "pricing_website.price4",
    },
];


const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingBottom: theme.spacing.xl,
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(26),
        fontWeight: 600,

        [theme.fn.smallerThan('lg')]: {
            fontSize: rem(24),
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(20),
        },
    },

    title_row: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 10,

        [theme.fn.smallerThan('lg')]: {
            flexDirection: 'column',
            gap: 5,
        },
    },

    description: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(20),
        fontWeight: 400,
        marginRight: 160,

        [theme.fn.smallerThan('lg')]: {
            fontSize: rem(18),
            marginRight: 0,
        },

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(16),
        },
    },

    price: {
        color: theme.primaryColor,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(26),
        fontWeight: 600,

        [theme.fn.smallerThan('lg')]: {
            fontSize: rem(24),
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(20),
        },
    },
}));


interface ProductProps {
    title: React.ReactNode;
    description: React.ReactNode;
    price: React.ReactNode;
}

export function Product({ title, description, price }: ProductProps) {
    const { classes } = useStyles();
    const { t } = useTranslation();

    return (
        <div>
            <Divider my='lg'/>
            <div className={classes.title_row}>
                <Title order={3} className={classes.title}>
                    {t(`${title}`)}
                </Title>
                <Text className={classes.price}>
                    {t(`${price}`)}
                </Text>
            </div>
            <Text className={classes.description}>
                {t(`${description}`)}
            </Text>
        </div>
    );
}

export function PricingWebsites() {
    const { classes } = useStyles();
    const { t } = useTranslation();

    const products = MOCKDATA.map((feature, index) => <Product {...feature} key={index} />);

    return (
        <Container size="md" p={0} className={classes.wrapper}>
            {products}
        </Container>
    );
}