import Link from "next/link";
import { createStyles, SimpleGrid, Card, Text, Container, AspectRatio } from '@mantine/core';
import { useTranslation } from 'next-i18next';
import Image from "next/image";
//covers
import cover from './../assets/blog/wordpress.jpg'


const mockdata = [
  {
    url: 'blog_post1.url',
    title: 'blog_post1.title',
    date: 'blog_post1.date',
    cover: cover,
  },
];


const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : theme.colors.gray[1],
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Roboto, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export function BlogGrid() {
  const { classes } = useStyles();
  const { t } = useTranslation(['blog']);

  const cards = mockdata.map((article) => (
    <Link key={article.title} href={t(`${article.url}`)} style={{textDecoration: 'none'}}>
        <Card key={article.title} p="md" radius="md" className={classes.card}>
          <AspectRatio ratio={1920 / 1080}>
              <Image src={cover} alt={t(`${article.title}`)} title={t(`${article.title}`)} loading='lazy' fill={true} />
          </AspectRatio>
          <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
              {t(`${article.date}`)}
          </Text>
          <Text className={classes.title} mt={5}>
              {t(`${article.title}`)}
          </Text>
        </Card>
    </Link>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}