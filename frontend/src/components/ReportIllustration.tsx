import { createStyles, useMantineTheme, Title, rem, Text } from '@mantine/core';
import trust_us from './../assets/trust_us.svg'


const useStyles = createStyles((theme) => ({
    ilustration: {
        height: '700px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
    },

    image: {
        marginTop: '-100px',
        height: '100%',
        width: 'auto',

        [theme.fn.smallerThan('lg')]: {
            maxWidth: '100vw',
            height: 'auto',
            marginTop: 0,
        },
    },
}))

export function ReportIllustration() {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    return (
        <div className={classes.ilustration}>
            <img src={trust_us} alt='Trust us' title='Trust us' loading='lazy' width={845} height={700} className={classes.image} />
        </div>
    )
}