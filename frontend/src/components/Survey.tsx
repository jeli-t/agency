import { Button, Container, createStyles, rem, useMantineTheme, Divider, Radio, Flex, TextInput, Checkbox } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useInputState } from '@mantine/hooks';
import { useState } from 'react';
import { useForm } from '@mantine/form';


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

    const [serverError, setServerError] = useState<string | null>(null);
    const navigate = useNavigate()

    const [businessType, setBusinessType] = useInputState('');
    const [industry, setIndustry] = useInputState('');
    const [mainGoal, setMainGoal] = useInputState('');
    const [website, setWebsite] = useInputState('');
    const [socialMedia, setSocialMedia] = useInputState('');
    const [advertising, setAdvertising] = useInputState('');
    const [email, setEmail] = useInputState('');

    const handleSubmit = async () => {
        console.log(businessType)
        console.log(industry)
        console.log(mainGoal)
        console.log(website)
        console.log(socialMedia)
        console.log(advertising)
        console.log(email)

        try {
            let response = await fetch('http://localhost:8000/get_started/submit', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
                body: JSON.stringify({
                    'businessType': businessType,
                    'industry': industry,
                    'mainGoal': mainGoal,
                    'website': website,
                    'socialMedia': socialMedia,
                    'advertising': advertising,
                    'email': email,
                })
            });

            if (response.status === 201) {
                navigate('/results')
            } else if (response.status === 400) {
                console.log(response.status)
            }
        } catch (err) {
            setServerError(err as string);
        }
    }


    return (
        <Container py='xl' className={classes.wrapper}>
            
            <Radio.Group name='business_type' onChange={(value)=>setBusinessType(value)} label='What type of business do you run?' size='2xl' fz={30} fw={600} className={classes.question}>
                <Flex direction="column" gap="sm" my='md'>
                    <Radio value="services" label="Local services" size='lg'/>
                    <Radio value="online_services" label="Online services" size='lg' />
                    <Radio value="shop" label="Local shop" size='lg' />
                    <Radio value="online_shop" label="Online shop" size='lg' />
                    <Radio value="other" label='Other (write below)' size='lg' />
                    <TextInput placeholder='Other' size='lg' variant="filled" onChange={(value)=>setBusinessType(value)} />
                </Flex>
            </Radio.Group>

            <Divider my='xl' style={{height: '10px', width: '100%'}} size='xl' variant='dotted' color='orange' />

            <Radio.Group name='industry' onChange={(value)=>setIndustry(value)} label='What industry do you operate in?' size='2xl' fz={30} fw={600} className={classes.question}>
                <Flex direction="column" gap="sm" my='md'>
                    <TextInput placeholder='Your industry here' size='lg' variant="filled" onChange={(value)=>setIndustry(value)} />
                </Flex>
            </Radio.Group>

            <Divider my='xl' style={{height: '10px', width: '100%'}} size='xl' variant='dotted' color='orange' />

            <Radio.Group name='main_goal' onChange={(value)=>setMainGoal(value)} label='What is your main goal?' size='2xl' fz={30} fw={600} className={classes.question}>
                <Flex direction="column" gap="sm" my='md'>
                    <Radio value="start_online" label="Start a new online business" size='lg' />
                    <Radio value="bring_online" label="Bring my local business to the Internet" size='lg' />
                    <Radio value="brand" label="Build a recognizable brand" size='lg' />
                    <Radio value="marketing" label="Reach new customers" size='lg' />
                    <Radio value="other" label='Other (write below)' size='lg' />
                    <TextInput placeholder='Other' size='lg' variant="filled" onChange={(value)=>setMainGoal(value)} />
                </Flex>
            </Radio.Group>

            <Divider my='xl' style={{height: '10px', width: '100%'}} size='xl' variant='dotted' color='orange' />

            <Radio.Group name='website' onChange={(value)=>setWebsite(value)} label='Do you have a website?' size='2xl' fz={30} fw={600} className={classes.question}>
                <Flex direction="column" gap="sm" my='md'>
                    <Radio value="no" label="No" size='lg' />
                    <Radio value="yes" label="Yes (If you would like to get an audit of your website, please provide the link below)" size='lg' />
                    <TextInput placeholder='https://example.com' size='lg' variant="filled" onChange={(value)=>setWebsite(value)} />
                </Flex>
            </Radio.Group>

            <Divider my='xl' style={{height: '10px', width: '100%'}} size='xl' variant='dotted' color='orange' />

            <Radio.Group name='social_media' onChange={(value)=>setSocialMedia(value)} label='Do you have social media?' size='2xl' fz={30} fw={600} className={classes.question}>
                <Flex direction="column" gap="sm" my='md'>
                    <Radio value="no" label="No" size='lg' />
                    <Radio value="yes" label="Yes (If you would like to get an audit of your social media, please provide the link below)" size='lg' />
                    <TextInput placeholder='https://example.com' size='lg' variant="filled" onChange={(value)=>setSocialMedia(value)} />
                </Flex>
            </Radio.Group>

            <Divider my='xl' style={{height: '10px', width: '100%'}} size='xl' variant='dotted' color='orange' />

            <Radio.Group name='advertising' onChange={(value)=>setAdvertising(value)} label='Do you run online advertising?' size='2xl' fz={30} fw={600} className={classes.question}>
                <Flex direction="column" gap="sm" my='md'>
                    <Radio value="no" label="No" size='lg' />
                    <Radio value="yes" label="Yes (write below)" size='lg' />
                    <TextInput placeholder='Facebook Ads, Google Ads, mailing, other' size='lg' variant="filled" onChange={(value)=>setAdvertising(value)} />
                </Flex>
            </Radio.Group>

            <Divider my='xl' style={{height: '10px', width: '100%'}} size='xl' variant='dotted' color='orange' />

            <Radio.Group name='email' onChange={(value)=>setEmail(value)} label='Where should we send the report?' size='2xl' fz={30} fw={600} className={classes.question}>
                <Flex direction="column" gap="sm" my='md'>
                    <TextInput placeholder='email@example.com' size='lg' variant="filled" onChange={(value)=>setEmail(value)} />
                    <Checkbox label="I agree to receive marketing information" size='lg' />
                </Flex>
            </Radio.Group>

            <Button onClick={handleSubmit} size='lg' className={classes.button}>
                Request FREE report
            </Button>
        </Container>
    )
}