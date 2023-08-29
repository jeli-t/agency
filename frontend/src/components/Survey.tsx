import { Button, Container, createStyles, rem, useMantineTheme, Divider, Radio, Flex, TextInput, Checkbox } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useInputState } from '@mantine/hooks';
import { useState } from 'react';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import { useTranslation } from 'react-i18next';


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
        margin: 'auto',
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(24),
        fontWeight: 600,
        marginTop: 40,
    
        [theme.fn.smallerThan('xs')]: {
          fontSize: rem(16),
        },
    },

    error: {
        width: '90%',
        fontFamily: `Roboto, ${theme.fontFamily}`,
        fontSize: rem(20),
        fontWeight: 600,
        textAlign: 'center',
        color: theme.colors.red[8],
        marginTop: 10,
        
        [theme.fn.smallerThan('xs')]: {
          fontSize: rem(16),
        },
    },
}))

export function Survey() {
    const theme = useMantineTheme();
    const { classes } = useStyles();
    const { t } = useTranslation();

    const [serverError, setServerError] = useState<string | null>(null);
    const [errorDisplay, setErrorDisplay] = useInputState('none');
    const navigate = useNavigate()

    const [businessType, setBusinessType] = useInputState('');
    const [industry, setIndustry] = useInputState('');
    const [companySize, setCompanySize] = useInputState('');
    const [mainGoal, setMainGoal] = useInputState('');
    const [budget, setBudget] = useInputState('');
    const [website, setWebsite] = useInputState('');
    const [socialMedia, setSocialMedia] = useInputState('');
    const [advertising, setAdvertising] = useInputState('');
    const [email, setEmail] = useInputState('');

    const form = useForm({
        initialValues: {
            email: '',
            terms: false,
        },
    
        validateInputOnBlur: true,
    
        validate: {
            email: isEmail(t("survey.email_error")),
            terms: isNotEmpty(t("survey.terms_error")),
        },
    });

    const handleSubmit = async () => {
        try {
            let response = await fetch('https://api.jeli.pl/get_started/submit', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
                body: JSON.stringify({
                    'businessType': businessType,
                    'industry': industry,
                    'companySize': companySize,
                    'mainGoal': mainGoal,
                    'budget': budget,
                    'website': website,
                    'socialMedia': socialMedia,
                    'advertising': advertising,
                    'email': email,
                })
            });

            if (response.status === 201) {
                setErrorDisplay('none')
                navigate('/report')
            } else if (response.status === 400) {
                setErrorDisplay('block')
            }
        } catch (err) {
            setServerError(err as string);
        }
    }


    return (
        <Container py='xl' className={classes.wrapper}>
            <form onSubmit={ form.onSubmit(handleSubmit) }>
                
                <Radio.Group name='business_type' required  onChange={(value)=>setBusinessType(value)} label={t("survey.question1")} size='2xl' fz={30} fw={600} className={classes.question}>
                    <Flex direction="column" gap="sm" my='md'>
                        <Radio value={t("survey.answer1a")} label={t("survey.answer1a")} size='lg'/>
                        <Radio value={t("survey.answer1b")} label={t("survey.answer1b")} size='lg' />
                        <Radio value={t("survey.answer1c")} label={t("survey.answer1c")} size='lg' />
                        <Radio value={t("survey.answer1d")} label={t("survey.answer1d")} size='lg' />
                        <Radio value={t("survey.answer1e")} label={t("survey.answer1e")} size='lg' />
                        <TextInput placeholder={t("survey.placeholder1")} size='lg' variant="filled" onChange={(value)=>setBusinessType(value)} />
                    </Flex>
                </Radio.Group>

                <Divider my='xl' style={{height: '10px', width: '100%'}} size='md' variant='dotted' color='orange' />

                <Radio.Group name='industry' required onChange={(value)=>setIndustry(value)} label={t("survey.question2")} size='2xl' fz={30} fw={600} className={classes.question}>
                    <Flex direction="column" gap="sm" my='md'>
                        <TextInput placeholder={t("survey.placeholder2")} size='lg' variant="filled" onChange={(value)=>setIndustry(value)} />
                    </Flex>
                </Radio.Group>

                <Divider my='xl' style={{height: '10px', width: '100%'}} size='md' variant='dotted' color='orange' />

                <Radio.Group name='company_size' required onChange={(value)=>setCompanySize(value)} label={t("survey.question3")} size='2xl' fz={30} fw={600} className={classes.question}>
                    <Flex direction="column" gap="sm" my='md'>
                        <Radio value={t("survey.answer3a")} label={t("survey.answer3a")} size='lg'/>
                        <Radio value={t("survey.answer3b")} label={t("survey.answer3b")} size='lg'/>
                        <Radio value={t("survey.answer3c")} label={t("survey.answer3c")} size='lg' />
                        <Radio value={t("survey.answer3d")} label={t("survey.answer3d")} size='lg' />
                    </Flex>
                </Radio.Group>

                <Divider my='xl' style={{height: '10px', width: '100%'}} size='md' variant='dotted' color='orange' />

                <Radio.Group name='main_goal' required onChange={(value)=>setMainGoal(value)} label={t("survey.question4")} size='2xl' fz={30} fw={600} className={classes.question}>
                    <Flex direction="column" gap="sm" my='md'>
                        <Radio value={t("survey.answer4a")} label={t("survey.answer4a")} size='lg' />
                        <Radio value={t("survey.answer4b")} label={t("survey.answer4b")} size='lg' />
                        <Radio value={t("survey.answer4c")} label={t("survey.answer4c")} size='lg' />
                        <Radio value={t("survey.answer4d")} label={t("survey.answer4d")} size='lg' />
                        <Radio value={t("survey.answer4e")} label={t("survey.answer4e")} size='lg' />
                        <TextInput placeholder={t("survey.placeholder4")} size='lg' variant="filled" onChange={(value)=>setMainGoal(value)} />
                    </Flex>
                </Radio.Group>

                <Divider my='xl' style={{height: '10px', width: '100%'}} size='md' variant='dotted' color='orange' />

                <Radio.Group name='budget' required onChange={(value)=>setBudget(value)} label={t("survey.question5")} size='2xl' fz={30} fw={600} className={classes.question}>
                    <Flex direction="column" gap="sm" my='md'>
                        <TextInput placeholder={t("survey.placeholder5")} size='lg' variant="filled" onChange={(value)=>setBudget(value)} />
                    </Flex>
                </Radio.Group>

                <Divider my='xl' style={{height: '10px', width: '100%'}} size='md' variant='dotted' color='orange' />

                <Radio.Group name='website' required onChange={(value)=>setWebsite(value)} label={t("survey.question6")} size='2xl' fz={30} fw={600} className={classes.question}>
                    <Flex direction="column" gap="sm" my='md'>
                        <Radio value={t("survey.answer6a")} label={t("survey.answer6a")} size='lg' />
                        <Radio value={t("survey.answer6b")} label={t("survey.answer6b")} size='lg' />
                        <TextInput placeholder={t("survey.placeholder6")} size='lg' variant="filled" onChange={(value)=>setWebsite(value)} />
                    </Flex>
                </Radio.Group>

                <Divider my='xl' style={{height: '10px', width: '100%'}} size='md' variant='dotted' color='orange' />

                <Radio.Group name='social_media' required onChange={(value)=>setSocialMedia(value)} label={t("survey.question7")} size='2xl' fz={30} fw={600} className={classes.question}>
                    <Flex direction="column" gap="sm" my='md'>
                        <Radio value={t("survey.answer7a")} label={t("survey.answer7a")} size='lg' />
                        <Radio value={t("survey.answer7b")} label={t("survey.answer7b")} size='lg' />
                        <TextInput placeholder={t("survey.placeholder7")} size='lg' variant="filled" onChange={(value)=>setSocialMedia(value)} />
                    </Flex>
                </Radio.Group>

                <Divider my='xl' style={{height: '10px', width: '100%'}} size='md' variant='dotted' color='orange' />

                <Radio.Group name='advertising' required onChange={(value)=>setAdvertising(value)} label={t("survey.question8")} size='2xl' fz={30} fw={600} className={classes.question}>
                    <Flex direction="column" gap="sm" my='md'>
                        <Radio value={t("survey.answer8a")} label={t("survey.answer8a")} size='lg' />
                        <Radio value={t("survey.answer8b")} label={t("survey.answer8b")} size='lg' />
                        <TextInput placeholder={t("survey.placeholder8")} size='lg' variant="filled" onChange={(value)=>setAdvertising(value)} />
                    </Flex>
                </Radio.Group>

                <Divider my='xl' style={{height: '10px', width: '100%'}} size='md' variant='dotted' color='orange' />

                <Radio.Group name='email' required onChange={(value)=>setEmail(value)} label={t("survey.question9")} size='2xl' fz={30} fw={600} className={classes.question}>
                    <Flex direction="column" gap="sm" my='md'>
                        <TextInput {...form.getInputProps('email')} onChange={e => {setEmail(e.target.value); form.setFieldValue("email", e.target.value)}} placeholder={t("survey.placeholder9")} size='lg' variant="filled" />
                        <Checkbox {...form.getInputProps('terms')} label={t("survey.terms")} size='lg' />
                    </Flex>
                </Radio.Group>

                <Button type='submit' size='lg' className={classes.button}>
                    {t("survey.button")}
                </Button>

                <div className={classes.error} style={{display: `${errorDisplay}`}}>
                    {t("survey.error")}
                </div>
            </form>
        </Container>
    )
}