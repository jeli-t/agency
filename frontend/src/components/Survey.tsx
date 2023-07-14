import { Button, Container, createStyles, rem, useMantineTheme, Divider, Radio, Flex } from '@mantine/core';
import { useNavigate } from 'react-router-dom';


const useStyles = createStyles((theme) => ({
    wrapper: {
        height: 'auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        [theme.fn.smallerThan('xs')]: {
            justifyContent: 'flex-start',
        }
    },

    question: {
        width: '90%',
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontWeight: 700,
        textAlign: 'left',
        paddingBottom: 10,

        [theme.fn.smallerThan('xs')]: {
        fontSize: rem(20),
        width: '100%',
        },
    },

    button: {
        width: '90%',
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(24),
        fontWeight: 600,
        marginTop: 40,
    
        [theme.fn.smallerThan('xs')]: {
          fontSize: rem(16),
        },
    },
}))

export function Survey() {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    const navigate = useNavigate()

    const handleSubmit = async () => {
        console.log('survey sent')
        navigate('/report')
      };

    return (
        <Container py='xl' className={classes.wrapper}>
            
            <Radio.Group name='business_type' label='What type of business do you run?' size='2xl' fz={30} fw={600} className={classes.question}>
                <Flex direction="column" gap="sm" my='md'>
                    <Radio value="services" label="Local services" size='lg' />
                    <Radio value="online_services" label="Online services" size='lg' />
                    <Radio value="shop" label="Local shop" size='lg' />
                    <Radio value="online_shop" label="Online shop" size='lg' />
                    <Radio value="other" label="Other" size='lg' />
                </Flex>
            </Radio.Group>

            <Divider my='xl' style={{height: '10px', width: '100%'}} size='xl' variant='dotted' color='orange' />

            <Radio.Group name='main_goal' label='What is your main goal to become visible on the Internet?' size='2xl' fz={30} fw={600} className={classes.question}>
                <Flex direction="column" gap="sm" my='md'>
                    <Radio value="bring_online" label="Bring my business to the Internet" size='lg' />
                    <Radio value="business_card" label="Create an online business card" size='lg' />
                    <Radio value="brand" label="Create a recognizable brand" size='lg' />
                    <Radio value="marketing" label="Reach new customers" size='lg' />
                    <Radio value="other" label="Other" size='lg' />
                </Flex>
            </Radio.Group>

            <Divider my='xl' style={{height: '10px', width: '100%'}} size='xl' variant='dotted' color='orange' />

            <Radio.Group name='website' label='Do you have a website?' size='2xl' fz={30} fw={600} className={classes.question}>
                <Flex direction="column" gap="sm" my='md'>
                    <Radio value="yes" label="Yes" size='lg' />
                    <Radio value="no" label="No" size='lg' />
                </Flex>
            </Radio.Group>

            <Divider my='xl' style={{height: '10px', width: '100%'}} size='xl' variant='dotted' color='orange' />

            <Radio.Group name='social_media' label='Do you have social media?' size='2xl' fz={30} fw={600} className={classes.question}>
                <Flex direction="column" gap="sm" my='md'>
                    <Radio value="yes" label="Yes" size='lg' />
                    <Radio value="no" label="No" size='lg' />
                </Flex>
            </Radio.Group>

            <Divider my='xl' style={{height: '10px', width: '100%'}} size='xl' variant='dotted' color='orange' />

            <Radio.Group name='marketing' label='Do you run online advertising campaigns?' size='2xl' fz={30} fw={600} className={classes.question}>
                <Flex direction="column" gap="sm" my='md'>
                    <Radio value="yes" label="Yes" size='lg' />
                    <Radio value="no" label="No" size='lg' />
                </Flex>
            </Radio.Group>

            <Button onClick={handleSubmit} size='lg' className={classes.button}>
                Get results
            </Button>
        </Container>
    )
}