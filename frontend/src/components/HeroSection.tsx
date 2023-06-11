import { createStyles, useMantineTheme, Title, rem } from '@mantine/core';
import { TypeAnimation } from 'react-type-animation';


const useStyles = createStyles((theme) => ({
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(44),
        lineHeight: 1.2,
        fontWeight: 700,
    
        [theme.fn.smallerThan('xs')]: {
          fontSize: rem(28),
        },
      },
}))

export function HeroSection() {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    return (
        <div  className={classes.container}>
            <Title className={classes.title}>
                Stay noticeable online
            </Title>
            <TypeAnimation
                sequence={[
                    1000,
                    'Search Engine Optimization',
                    1000,
                    'Web development',
                    1000,
                    'Social media',
                ]}
                wrapper="span"
                style={{ fontSize: '3em', display: 'inline-block' }}
                repeat={Infinity}
            />
        </div>
    )
}