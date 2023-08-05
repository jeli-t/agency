import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio, rem, Center } from '@mantine/core';
import web_development from './../assets/web_development.svg'
import seo from './../assets/seo.svg'
import social_media from './../assets/social_media.svg'
import marketing from './../assets/marketing.svg'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const useStyles = createStyles((theme) => ({
  wrapper: {
    width: '60vw',

    [theme.fn.smallerThan('lg')]: {
        width: '100%',
    },
  },

  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : theme.colors.gray[1],

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Roboto, ${theme.fontFamily}`,
    fontSize: rem(30),
    fontWeight: 600,
    margin: 10,
    textAlign: 'center',

    [theme.fn.smallerThan('lg')]: {
        fontSize: rem(24),
    },

    [theme.fn.smallerThan('xs')]: {
        fontSize: rem(20),
    },
},

  ilustration: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
},
}));

export function SolutionCategories() {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <Container py='xl' size='fluid' className={classes.wrapper}>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Link to='/websites' style={{textDecoration: 'none'}}>
            <Card key={'Websites'} p="md" radius="md" component="a" className={classes.card}>
                <AspectRatio ratio={1920 / 1080}>
                    <div className={classes.ilustration} style={{backgroundImage: `url(${web_development})`}}></div>
                </AspectRatio>
                <Text className={classes.title} mt={5}>
                    {t("solution_categories.solution1")}
                </Text>
            </Card>
        </ Link>

        <Link to='/search-engine-optimization' style={{textDecoration: 'none'}}>
            <Card key={'Search Engine Optimization'} p="md" radius="md" component="a" className={classes.card}>
                <AspectRatio ratio={1920 / 1080}>
                    <div className={classes.ilustration} style={{backgroundImage: `url(${seo})`}}></div>
                </AspectRatio>
                <Text className={classes.title} mt={5}>
                    {t("solution_categories.solution2")}
                </Text>
            </Card>
        </Link>

        <Link to='/social-media' style={{textDecoration: 'none'}}>
            <Card key={'Social media'} p="md" radius="md" component="a" className={classes.card}>
                <AspectRatio ratio={1920 / 1080}>
                    <div className={classes.ilustration} style={{backgroundImage: `url(${social_media})`}}></div>
                </AspectRatio>
                <Text className={classes.title} mt={5}>
                    {t("solution_categories.solution3")}
                </Text>
            </Card>
        </Link>

        <Link to='/digital-marketing' style={{textDecoration: 'none'}}>
            <Card key={'Digital marketing'} p="md" radius="md" component="a" className={classes.card}>
                <AspectRatio ratio={1920 / 1080}>
                    <div className={classes.ilustration} style={{backgroundImage: `url(${marketing})`}}></div>
                </AspectRatio>
                <Text className={classes.title} mt={5}>
                    {t("solution_categories.solution4")}
                </Text>
            </Card>
        </Link>
      </SimpleGrid>
    </Container >
  );
}