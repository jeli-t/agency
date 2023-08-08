import { createStyles, useMantineTheme, Title, rem, Text, ThemeIcon } from '@mantine/core';
import { IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react';
import people from './../assets/people.svg'
import { useTranslation } from 'react-i18next';


const useStyles = createStyles((theme) => ({
    wrapper: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        [theme.fn.smallerThan('xs')]: {
            height: 'fit',
            justifyContent: 'flex-start',
        }
    },

    hero_section: {
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
        fontSize: rem(24),
        fontWeight: 600,

        [theme.fn.smallerThan('lg')]: {
            fontSize: rem(20),
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(16),
        },
    },

    icon: {
        display: 'inline-block',
        marginTop: 20,
        marginRight: 20,

        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
}))

export function AboutUs() {
    const theme = useMantineTheme();
    const { classes } = useStyles();
    const { t } = useTranslation();

    return (
        <div className={classes.wrapper}>
            <div className={classes.hero_section}>
                <div className={classes.description}>
                    <Title className={classes.title}>
                        {t("about_us.title")}
                    </Title>
                    <Text className={classes.text}>
                        {t("about_us.text")}
                    </Text>
                    <div>
                        <div className={classes.icon}>
                            <a href='https://www.instagram.com/jeli_agency/'>
                                <ThemeIcon
                                    size={50}
                                    radius="md"
                                    variant="gradient"
                                    gradient={{ deg: 133, from: 'orange', to: 'red' }}
                                >
                                    <IconBrandInstagram size="2rem" stroke={2} />
                                </ThemeIcon>
                            </a>
                        </div>
                        <div className={classes.icon}>
                            <a href='https://www.facebook.com/profile.php?id=100095023350168'>
                                <ThemeIcon
                                    size={50}
                                    radius="md"
                                    variant="gradient"
                                    gradient={{ deg: 133, from: 'orange', to: 'red' }}
                                >
                                    <IconBrandFacebook size="2rem" stroke={2} />
                                </ThemeIcon>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={classes.ilustration}>
                    <img src={people} alt='Our team' title='Our team' loading='lazy' width={845} height={800} className={classes.image} />
                </div>
            </div>
        </div>
    )
}