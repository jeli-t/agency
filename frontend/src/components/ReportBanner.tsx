import { createStyles, Title, Text, Container, rem, Button } from '@mantine/core';
import { Dots } from '../assets/Dots';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        marginTop: rem(80),
        marginBottom: rem(80),

        [theme.fn.smallerThan('sm')]: {
            marginTop: rem(60),
            marginBottom: rem(60),
        },
    },

    inner: {
        position: 'relative',
        zIndex: 1,
    },

    dots: {
        position: 'absolute',
        color: theme.colorScheme === 'dark' ? theme.colors.gray[6] : theme.colors.gray[3],

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    dotsLeft: {
        left: 0,
        top: 0,
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

    button: {
      width: 200,
      marginTop: 20,
      marginRight: 20,
      color: theme.white,
      fontFamily: `Roboto, ${theme.fontFamily}`,
      fontSize: rem(24),
      fontWeight: 400,
  
      [theme.fn.smallerThan('xs')]: {
          width: 140,
          fontSize: rem(16),
          marginRight: 10,
      },
    },
}));

export function ReportBanner() {
    const { classes } = useStyles();
    const { t } = useTranslation();

    return (
        <Container className={classes.wrapper} size={1400}>
            <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
            <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

            <div className={classes.inner}>
                <Container p={0} size={800}>
                    <Title order={1} className={classes.title}>
                      {t("report_banner.title")}
                    </Title>
                    <Text className={classes.description}>
                        {t("report_banner.text")}
                    </Text>
                    <div>
                        <Link to='/contact'>
                            <Button className={classes.button} size='md' radius='md'>
                                {t("report_banner.button1")}
                            </Button>
                        </Link>
                        <Link to='/blog'>
                            <Button className={classes.button} size='md' radius='md'>
                                {t("report_banner.button2")}
                            </Button>
                        </Link>
                    </div>
                </Container>
            </div>
        </Container>
    );
}