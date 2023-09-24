import { createStyles, SimpleGrid, Card, Text, Container, AspectRatio, rem } from '@mantine/core';
import web_development from './../assets/web_development.svg';
import seo from './../assets/seo.svg';
import social_media from './../assets/social_media.svg';
import marketing from './../assets/marketing.svg';
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'next-i18next'


const useStyles = createStyles((theme) => ({
  wrapper: {
    marginTop: 70,
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
}));

export function SolutionCategories() {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <Container py='xl' size='fluid' className={classes.wrapper}>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Link href='/websites' style={{textDecoration: 'none'}}>
            <Card key={'Websites'} p="md" radius="md" className={classes.card}>
                <AspectRatio ratio={1920 / 1080}>
                    <Image src={web_development} alt="Web development" fill={true} />
                </AspectRatio>
                <Text className={classes.title} mt={5}>
                    {t("solution_categories.solution1")}
                </Text>
            </Card>
        </ Link>

        <Link href='/search-engine-optimization' style={{textDecoration: 'none'}}>
            <Card key={'Search Engine Optimization'} p="md" radius="md" className={classes.card}>
                <AspectRatio ratio={1920 / 1080}>
                    <Image src={seo} alt="Search engine optimization" fill={true} />
                </AspectRatio>
                <Text className={classes.title} mt={5}>
                    {t("solution_categories.solution2")}
                </Text>
            </Card>
        </Link>

        <Link href='/social-media' style={{textDecoration: 'none'}}>
            <Card key={'Social media'} p="md" radius="md" className={classes.card}>
                <AspectRatio ratio={1920 / 1080}>
                    <Image src={social_media} alt="Social media" fill={true} />
                </AspectRatio>
                <Text className={classes.title} mt={5}>
                    {t("solution_categories.solution3")}
                </Text>
            </Card>
        </Link>

        <Link href='/digital-marketing' style={{textDecoration: 'none'}}>
            <Card key={'Digital marketing'} p="md" radius="md" className={classes.card}>
                <AspectRatio ratio={1920 / 1080}>
                    <Image src={marketing} alt="Digital marketing" fill={true} />
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