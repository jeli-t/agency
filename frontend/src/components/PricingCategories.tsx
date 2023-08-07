import { Container, Title, Accordion, createStyles, rem } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { PricingWebsites } from './PricingWebsites';
import { PricingSeo } from './PricingSeo';
import { PricingSocialMedia } from './PricingSocialMedia';


const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        minHeight: 650,
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(26),
        fontWeight: 600,

        [theme.fn.smallerThan('lg')]: {
            fontSize: rem(26),
        },
    
        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(24),
        },
    },

    item: {
        borderRadius: theme.radius.md,
        marginBottom: theme.spacing.lg,
        border: `${rem(2)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
        }`,
    },
}));


export function PricingCategories() {
    const { classes } = useStyles();
    const { t } = useTranslation();

    return (
        <Container size="md" className={classes.wrapper}>

            <Accordion variant="separated">
                <Accordion.Item className={classes.item} value={t("pricing_categories.websites")}>
                    <Accordion.Control>
                        <Title order={2} className={classes.title}>{t("pricing_categories.websites")}</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                        <PricingWebsites />
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value={t("pricing_categories.seo")}>
                    <Accordion.Control>
                        <Title order={2} className={classes.title}>{t("pricing_categories.seo")}</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                        <PricingSeo />
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value={t("pricing_categories.social_media")}>
                    <Accordion.Control>
                        <Title order={2} className={classes.title}>{t("pricing_categories.social_media")}</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                        <PricingSocialMedia />
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value={t("pricing_categories.other")}>
                    <Accordion.Control>
                        <Title order={2} className={classes.title}>{t("pricing_categories.other")}</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                        {/* pricing here */}
                    </Accordion.Panel>
                </Accordion.Item>

            </Accordion>
        </Container>
    );
}