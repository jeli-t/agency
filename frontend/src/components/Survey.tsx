import { Button, Container, createStyles, rem, useMantineTheme, Divider, Radio, Flex, TextInput } from '@mantine/core';
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
                    <Radio value="other" label='Other (write below)' size='lg' />
                    <TextInput placeholder='Other' size='lg' variant="filled" />
                </Flex>
            </Radio.Group>

            <Divider my='xl' style={{height: '10px', width: '100%'}} size='xl' variant='dotted' color='orange' />

            <Radio.Group name='email' label='What industry do you operate in?' size='2xl' fz={30} fw={600} className={classes.question}>
                <Flex direction="column" gap="sm" my='md'>
                    <TextInput placeholder='Your industry here' size='lg' variant="filled"/>
                </Flex>
            </Radio.Group>

            <Divider my='xl' style={{height: '10px', width: '100%'}} size='xl' variant='dotted' color='orange' />

            <Radio.Group name='main_goal' label='What is your main goal?' size='2xl' fz={30} fw={600} className={classes.question}>
                <Flex direction="column" gap="sm" my='md'>
                    <Radio value="start_online" label="Start a new online business" size='lg' />
                    <Radio value="bring_online" label="Bring my local business to the Internet" size='lg' />
                    <Radio value="brand" label="Build a recognizable brand" size='lg' />
                    <Radio value="marketing" label="Reach new customers" size='lg' />
                    <Radio value="other" label='Other (write below)' size='lg' />
                    <TextInput placeholder='Other' size='lg' variant="filled" />
                </Flex>
            </Radio.Group>

            <Divider my='xl' style={{height: '10px', width: '100%'}} size='xl' variant='dotted' color='orange' />

            <Radio.Group name='website' label='Do you have a website?' size='2xl' fz={30} fw={600} className={classes.question}>
                <Flex direction="column" gap="sm" my='md'>
                    <Radio value="no" label="No" size='lg' />
                    <Radio value="yes" label="Yes (If you would like to get an audit of your website, please provide the link below)" size='lg' />
                    <TextInput placeholder='https://example.com' size='lg' variant="filled" />
                </Flex>
            </Radio.Group>

            <Divider my='xl' style={{height: '10px', width: '100%'}} size='xl' variant='dotted' color='orange' />

            <Radio.Group name='social_media' label='Do you have social media?' size='2xl' fz={30} fw={600} className={classes.question}>
                <Flex direction="column" gap="sm" my='md'>
                    <Radio value="no" label="No" size='lg' />
                    <Radio value="yes" label="Yes (If you would like to get an audit of your social media, please provide the link below)" size='lg' />
                    <TextInput placeholder='https://example.com' size='lg' variant="filled" />
                </Flex>
            </Radio.Group>

            <Divider my='xl' style={{height: '10px', width: '100%'}} size='xl' variant='dotted' color='orange' />

            <Radio.Group name='marketing' label='Do you run online advertising?' size='2xl' fz={30} fw={600} className={classes.question}>
                <Flex direction="column" gap="sm" my='md'>
                    <Radio value="no" label="No" size='lg' />
                    <Radio value="yes" label="Yes (write below)" size='lg' />
                    <TextInput placeholder='Facebook Ads, Google Ads, mailing, other' size='lg' variant="filled" />
                </Flex>
            </Radio.Group>

            <Divider my='xl' style={{height: '10px', width: '100%'}} size='xl' variant='dotted' color='orange' />

            <Radio.Group name='email' label='Where should we send the report?' size='2xl' fz={30} fw={600} className={classes.question}>
                <Flex direction="column" gap="sm" my='md'>
                    <TextInput placeholder='email@example.com' size='lg' variant="filled"/>
                </Flex>
            </Radio.Group>

            <Button onClick={handleSubmit} size='lg' className={classes.button}>
                Request FREE expertise
            </Button>
        </Container>
    )
}