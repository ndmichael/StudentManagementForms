import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../FormikControl'
import { Button, Box } from '@chakra-ui/core'
import AlertMsg from '../AlertMsg'

function StudentClassForm() {
    let getValues = null
    const initialValues = {
        lastname: '',
        firstname: '',
        email: '',
        studentID: '',
        gender: '',
        studentLevel: '',
        department: '',
        subjects: []
    }

    const validationSchema = Yup.object({
        lastname: Yup.string().required('required field'),
        firstname: Yup.string().required('required field'),
        email: Yup.string().email('not an email format').required('required field'),
        studentID: Yup.string().required('required field'),
        gender: Yup.string().required('required field'),
        studentLevel: Yup.string().required('required field'),
        department: Yup.string().required('required field'),
        // subjects: Yup.array().required('required field')
    })

    const onSubmit = (values, onSubmitProps) => {

        // console.log("entered values are: ", onSubmitProps);
        onSubmitProps.resetForm()
        onSubmitProps.setSubmitting(false)
        onSubmitProps.setStatus('submitted')


    }

    const genderOptions = [
        { key: 'Male', value: 'male' },
        { key: 'Female', value: 'Female' },
        { key: 'Others', value: 'Others' }
    ]

    const levelOptions = [
        { key: 'Choose level', value: '' },
        { key: 'Level 001', value: 'level 001' },
        { key: 'Level 002', value: 'level 002' },
        { key: 'Level 003', value: 'level 003' }
    ]

    const departmentOptions = [
        { key: 'Choose Department', value: '' },
        { key: 'Computer Science', value: 'computerSc' },
        { key: 'Economics', value: 'economics' },
        { key: 'Arts', value: 'art' }
    ]

    const cSubjectOptions = [
        { key: 'Math for Computer', value: 'math for computer' },
        { key: 'Python', value: 'python' },
        { key: 'JavaScript', value: 'javascript' },
        { key: 'PHP', value: 'php' }
    ]

    const eSubjectOptions = [
        { key: 'Math', value: 'math' },
        { key: 'English', value: 'english' },
        { key: 'Statistic', value: 'statistic' },
        { key: 'Economic', value: 'economics' }
    ]

    const aSubjectOptions = [
        { key: 'Still life', value: 'still life' },
        { key: 'Landscape', value: 'Landscape' },
        { key: 'Abstract', value: 'abstract' },
        { key: 'English', value: 'english' }
    ]

    return (

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>

            {
                formik => {

                    console.log(formik);

                    return <Form>
                        {formik.status ? <AlertMsg values={getValues} /> : null}
                        <Box display={{ md: "flex" }} width={['100%', "1/2"]} mb="15px">
                            <Box w="100%" pr={{ md: "3" }}>
                                <FormikControl
                                    control="chakraInput"
                                    type="text"
                                    label="FirstName"
                                    name="firstname"

                                />
                            </Box>
                            <Box w="100%">
                                <FormikControl
                                    control="chakraInput"
                                    type="text"
                                    label="LastName"
                                    name="lastname"
                                />
                            </Box>

                        </Box>

                        <Box display={{ md: "flex" }} width={['100%', "1/2"]} mb="15px">
                            <Box w="100%" pr={{ md: "3" }}>
                                <FormikControl
                                    control="chakraInput"
                                    type="email"
                                    label="Email"
                                    name="email"
                                />

                            </Box>

                            <Box w="100%">
                                <FormikControl
                                    control="chakraInput"
                                    type="text"
                                    label="Student ID"
                                    name="studentID"
                                />
                            </Box>

                        </Box>

                        <Box w="100%" mb="15px">
                            <FormikControl
                                control="chakraRadio"
                                label="Gender"
                                name="gender"
                                options={genderOptions}
                            />
                        </Box>

                        <Box display={{ md: "flex" }} width={['100%', "1/2"]} mb="15px">
                            <Box w="100%" pr={{ md: "3" }}>
                                <FormikControl
                                    control="chakraSelect"
                                    label="School Year"
                                    name="studentLevel"
                                    options={levelOptions}
                                />
                            </Box>
                            <Box w="100%" >
                                <FormikControl
                                    control="chakraSelect"
                                    label="department"
                                    name="department"
                                    options={departmentOptions}
                                />
                            </Box>
                        </Box>
                        <Box>
                            {
                                formik.values.department === "computerSc" ?

                                    <FormikControl
                                        control="chakraCheckbox"
                                        label="Subjects"
                                        name="subjects"
                                        options={cSubjectOptions}
                                    /> : formik.values.department === "economics" ?
                                        <FormikControl
                                            control="chakraCheckbox"
                                            label="Subjects"
                                            name="subjects"
                                            options={eSubjectOptions}
                                        /> : formik.values.department === "art" ?
                                            <FormikControl
                                                control="chakraCheckbox"
                                                label="Subjects"
                                                name="subjects"
                                                options={aSubjectOptions}
                                            /> : null

                            }
                        </Box>

                        <Button type="submit" variantColor="teal" size="lg" mt="20px" disabled={!formik.isValid}>Submit </Button>
                    </Form>
                }
            }

        </Formik>
    )
}

export default StudentClassForm
