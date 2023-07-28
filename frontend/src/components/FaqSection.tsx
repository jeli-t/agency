import { Container, Title, Accordion, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    marginTop: 100,
    minHeight: 650,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Roboto, ${theme.fontFamily}`,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));


export function FaqSection() {
  const { classes } = useStyles();
  return (
    <Container className={classes.wrapper}>
      <Title order={3} align="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>
            Is your company registered?
          </Accordion.Control>
          <Accordion.Panel>
            Not yet but I'am working on that. For now I work as a freelancer based on a contract for work.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>
            What technologies do you use?
          </Accordion.Control>
          <Accordion.Panel>
            We create most of the websites using Wordpress Elementor, so anyone can easily update information on the site without hiring a specialist. For more complex projects, we use React JS and Django.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>
            What experience do you have?
          </Accordion.Control>
          <Accordion.Panel>
            I started my adventure with programming at the age of 12. Since then I have learned a lot and written thousands of lines of code. At this point, I have closed a few commercial projects and I am working on my portfolio.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>
            How much does a website cost?
          </Accordion.Control>
          <Accordion.Panel>
            It all depends on the size of the project. Simple landing pages starts from 100$, large business pages can take up 1000$. In addition to the cost of developing a website, you must be prepared to spend about $50-100 per year for hosting and domain name (we will help you choose the right one for your needs).
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>
            How much does it take to make a website?
          </Accordion.Control>
          <Accordion.Panel>
            It all depends on the size of the project. Simple landing pages take a few days to a week, large business pages can take up to a month.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}