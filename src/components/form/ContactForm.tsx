import React, { useState, useRef } from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    FormErrorMessage,
    Textarea,
    Container,
    IconButton,
    Tooltip,
    Divider
} from "@chakra-ui/react";
import { SignupType, SignupErrorType } from "../../types";
import { HiOutlineRefresh } from 'react-icons/hi';
import { AiTwotoneSound } from 'react-icons/ai'

import {
    flexStyleProps,
    stackStyleProps,
    boxContainerStyleProps,
    headingStyleProps,
    textStyleProps,
    signupButtonStyleProps,
    signupContainerStyleProps,
    linkStyleProps,
} from "./styles/signup-style-props";

import { useDarkModeTheme } from "../../contexts";
import { Formik, Field, Form, FormikState } from "formik";
import { signupValidationSchema, generateCaptcha } from "../../utils";
import { useToast } from '../../hooks'
import { UserDetails } from '../../components';

const ContactForm = () => {

    const [captcha, setCaptcha] = useState(generateCaptcha(9));
    const defaultCaptcha = useRef<HTMLInputElement | null>(null)
    const [userFormData, setUserFormData] = useState<SignupType[]>([]);

    const {
        colorProp: { bodybg, cardBg, cardText, cardLightText },
    } = useDarkModeTheme();

    const { notifySuccess, notifyError } = useToast();

    const initialValues: SignupType = {
        fullname: "",
        email: "",
        description: "",
        captcha: "",
    };

    const getRandomCaptchaValue = () => {
        setCaptcha(generateCaptcha(9));
    }

    const playCaptchaAudio = () => {
        const audio = new SpeechSynthesisUtterance(
            captcha.toString().split('').join(' '),
        )
        audio.rate = 1.0;
        window.speechSynthesis.speak(audio);
    }


    const signupFormValidate = async (values: SignupType, resetForm: (nextState?: Partial<FormikState<SignupType>> | undefined) => void) => {
        if (defaultCaptcha.current?.value !== values.captcha) {
            notifyError("Please Enter Correct Captcha")
        } else {
            setUserFormData([...userFormData, values]);
            getRandomCaptchaValue();
            resetForm();
            notifySuccess("Details have been submitted. member from our team  will contact you shortly");
        }
    };

    return (
        <>
            <Flex {...flexStyleProps}>
                <Stack {...stackStyleProps}>
                    <Box bg={cardBg} {...boxContainerStyleProps}>
                        <Stack align={"center"}>
                            <Heading {...headingStyleProps}>Contact Us</Heading>
                            <Text {...textStyleProps}>
                                Share your message will get back to you within short time 🍻
                            </Text>
                        </Stack>
                        <Stack spacing={4} mt={3}>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={signupValidationSchema}
                                onSubmit={(values, { resetForm }) => {
                                    signupFormValidate(values, resetForm)

                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form>

                                        <FormControl
                                            isInvalid={!!errors.fullname && touched.fullname}
                                            mt="3"
                                        >
                                            <FormLabel id="fullname">Full Name</FormLabel>
                                            <Field as={Input} type="fullname" id="fullname" name="fullname" />
                                            <FormErrorMessage>{errors.fullname}</FormErrorMessage>
                                        </FormControl>

                                        <FormControl
                                            isInvalid={!!errors.email && touched.email}
                                            mt="3"
                                        >
                                            <FormLabel id="email">Email address</FormLabel>
                                            <Field as={Input} type="email" id="email" name="email" />
                                            <FormErrorMessage>{errors.email}</FormErrorMessage>
                                        </FormControl>

                                        <FormControl
                                            mt="3"
                                        >
                                            <FormLabel id="description">Your Message </FormLabel>
                                            <Field as={Textarea} type="text" id="description" name="description" placeholder="share your message" />
                                        </FormControl>
                                        <FormControl
                                            mt="3"
                                            isInvalid={!!errors.captcha && touched.captcha}
                                        >
                                            <FormLabel id="captcha">Captch </FormLabel>
                                            <Container maxW='1xl' centerContent>
                                                <Box display="flex" flexDirection="column" gap="1" p={2.5} background={bodybg} borderRadius="5px">
                                                    <Box display="flex" gap={2} p={3}>
                                                        <Input type="text" background={bodybg} border="2px solid black" height="80px" fontWeight="bold" value={captcha} ref={defaultCaptcha} disabled />
                                                        <Box display="flex" flexDirection="column" gap={2}>
                                                            <Tooltip label="Refresh to see different captcha">
                                                                <IconButton aria-label='theme switch' icon={<HiOutlineRefresh />} bg={cardBg} height="33px" onClick={getRandomCaptchaValue} />
                                                            </Tooltip>
                                                            <Tooltip label="Listen Captcha From the text">
                                                                <IconButton aria-label='theme switch' icon={<AiTwotoneSound />} bg={cardBg} height="33px" onClick={playCaptchaAudio} />
                                                            </Tooltip>
                                                        </Box>
                                                    </Box>
                                                    <Field as={Input} type="text" id="captcha" name="captcha" border="1px solid black" placeholder="Enter Captcha from above" />
                                                    <FormErrorMessage>{errors.captcha}</FormErrorMessage>
                                                </Box>
                                            </Container>
                                        </FormControl>

                                        <Stack {...signupContainerStyleProps}>
                                            <Button type="submit" {...signupButtonStyleProps}>
                                                Send Message
                                            </Button>
                                        </Stack>
                                    </Form>
                                )}
                            </Formik>

                        </Stack>
                    </Box>
                </Stack>
            </Flex>

            <Container maxW='container.lg' bg={cardBg} mb={10} centerContent>
                <Text fontSize='2xl' fontWeight="bold" py={5}>Form Details</Text>
                <Divider />
                {
                    userFormData.length > 0 ? (<UserDetails userdetails={userFormData} />) : (
                        <Text fontSize='2xl' py={5}>No data found</Text>

                    )
                }
            </Container>
        </>
    )
}

export { ContactForm }