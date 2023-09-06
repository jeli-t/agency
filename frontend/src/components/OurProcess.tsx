import { Link } from 'react-router-dom';
import { createStyles, useMantineTheme, Title, rem, Text, Timeline } from '@mantine/core';
import our_process from './../assets/our_process.svg'
import { useTranslation } from 'react-i18next';


const useStyles = createStyles((theme) => ({
    wrapper: {
        height: 'fit',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : theme.colors.gray[1],

        [theme.fn.smallerThan('xs')]: {
            justifyContent: 'flex-start',
        }
    },

    hero_section: {
        minHeight: '800px',
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 80,

        [theme.fn.smallerThan('lg')]: {
            flexDirection: 'column-reverse',
            width: '90%',
            margin: 40,
        },
    },

    description: {
        height: '100%',
        width: '45%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'left',

        [theme.fn.smallerThan('lg')]: {
            width: '90%',
        },
    },

    ilustration: {
        height: '100%',
        width: '55%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        [theme.fn.smallerThan('lg')]: {
            width: '90%',
        },
    },

    image: {
        width: '120%',
        height: 'auto',

        [theme.fn.smallerThan('lg')]: {
            maxWidth: '845px',
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(40),
        fontWeight: 600,
        marginBottom: 10,

        [theme.fn.smallerThan('lg')]: {
            fontSize: rem(30),
        },
    
        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(24),
        },
    },

    text: {
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

    itemTitle: {
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

    link: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontWeight: 600,
        textDecoration: 'none',
    },

}))

export function OurProcess() {
    const theme = useMantineTheme();
    const { classes } = useStyles();
    const { t } = useTranslation();

    return (
        <div className={classes.wrapper}>
            <div className={classes.hero_section}>
                <div className={classes.description}>
                    <Title order={2} className={classes.title}>
                        {t("our_process.title")}
                    </Title>
                    <Timeline bulletSize={24} lineWidth={4} color='orange' active={4} classNames={{itemTitle: classes.itemTitle}} >
                        <Timeline.Item title={t("our_process.step1")}>
                            <Text className={classes.text}>
                                {t("our_process.description1")}
                            </Text>
                        </Timeline.Item>
                        <Timeline.Item title={t("our_process.step2")}>
                            <Text className={classes.text}>
                                {t("our_process.description2")}
                            </Text>
                        </Timeline.Item>
                        <Timeline.Item title={t("our_process.step3")}>
                            <Text className={classes.text}>
                                {t("our_process.description3")}
                            </Text>
                        </Timeline.Item>
                        <Timeline.Item title={t("our_process.step4")} lineVariant='dashed'>
                            <Text className={classes.text}>
                                {t("our_process.description4")}
                            </Text>
                        </Timeline.Item>
                        <Timeline.Item title={t("our_process.step5")}>
                            <Text className={classes.text}>
                                {t("our_process.description5")}
                            </Text>
                        </Timeline.Item>
                    </Timeline>
                </div>
                <div className={classes.ilustration}>
                    <img src={our_process} alt='Our process' title='Our process' loading='lazy' width={845} height={800} className={classes.image} />
                </div>
            </div>
        </div>
    )
}