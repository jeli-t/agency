import { Link } from 'react-router-dom';
import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import { useTranslation } from 'react-i18next';


const mockdata = [
  {
    url: 'blog_post3.url',
    title: 'blog_post3.title',
    image: 'blog_post3.image',
    date: 'blog_post3.date',
  },
  {
    url: 'blog_post2.url',
    title: 'blog_post2.title',
    image: 'blog_post2.image',
    date: 'blog_post2.date',
  },
  {
    url: 'blog_post1.url',
    title: 'blog_post1.title',
    image: 'blog_post1.image',
    date: 'blog_post1.date',
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
    <Link to={t(`${article.url}`)} style={{textDecoration: 'none'}}>
        <Card key={article.title} p="md" radius="md" className={classes.card}>
        <AspectRatio ratio={1920 / 1080}>
            <Image src={t(`${article.image}`)} />
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