import { createStyles, useMantineTheme, Title, rem, Text } from '@mantine/core';
import question_mark from './../assets/question_mark.svg'
import Image from "next/image";
import { useTranslation } from 'next-i18next';


const useStyles = createStyles((theme) => ({
    wrapper: {
        height: 'fit',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : theme.colors.gray[1],
        overflowX: 'hidden',

        [theme.fn.smallerThan('xs')]: {
            justifyContent: 'flex-start',
        }
    },

    hero_section: {
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        marginTop: 80,
        marginBottom: 80,

        [theme.fn.smallerThan('lg')]: {
            flexDirection: 'column',
            width: '90%',
            margin: 0,
            marginBottom: 80,
        },
    },

    description: {
        height: '100%',
        width: '42%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'left',

        [theme.fn.smallerThan('lg')]: {
            width: '50%',
            margin: 10,
        },

        [theme.fn.smallerThan('xs')]: {
            width: '100%',
            height: 'auto',
            marginTop: -20,
        },
    },

    ilustration: {
        height: '700px',
        width: '58%',
        position: "relative",

        [theme.fn.smallerThan('lg')]: {
            width: '50%',
            height: '300px',
        },

        [theme.fn.smallerThan('xs')]: {
            width: '120%',
            marginTop: '40px',
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

export function DigitalMarketingStrategy() {
    const theme = useMantineTheme();
    const { classes } = useStyles();
    const { t } = useTranslation();

    return (
        <div className={classes.wrapper}>
            <div className={classes.hero_section}>
                <div className={classes.ilustration}>
                    <Image src={question_mark} alt='Question mark' title='hat is the best strategy?' loading='lazy' fill={true} />
                </div>
                <div className={classes.description}>
                    <Title order={2} className={classes.title}>
                        {t("digital_marketing_strategy.title")}
                    </Title>
                    <Text className={classes.text}>
                        {t("digital_marketing_strategy.text")}
                    </Text>
                </div>
            </div>
        </div>
    )
}