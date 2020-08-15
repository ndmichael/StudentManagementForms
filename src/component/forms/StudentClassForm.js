import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../FormikControl'
import { Button, Grid, Alert, AlertIcon } from '@chakra-ui/core'

function StudentClassForm() {
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
        console.log("entered values are: ", values)
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
                    console.log(formik)
                    return <Form>
                        {
                            formik.submitCount > 0 ?
                                <Grid templateColumns="repeat(1, 10fr)" gap={10} mt="4" rowGap={6}>
                                    <Alert status="success">
                                        <AlertIcon />
                                    Student Class has been registed for <strong>{formik.values.firstname}  {formik.values.lastname}</strong> with id number <strong>{formik.values.studentID}</strong>
                                    </Alert>
                                </Grid> : null

                        }


                        <Grid templateColumns="repeat(2, 6fr)" mt="4" gap={6} rowGap={6}>
                            <FormikControl
                                control="chakraInput"
                                type="text"
                                label="FirstName"
                                name="firstname"
                            />

                            <FormikControl
                                control="chakraInput"
                                type="text"
                                label="LastName"
                                name="lastname"
                            />
                        </Grid>

                        <Grid templateColumns="repeat(2, 6fr)" mt="4" gap={6} rowGap={6}>
                            <FormikControl
                                control="chakraInput"
                                type="email"
                                label="Email"
                                name="email"
                            />

                            <FormikControl
                                control="chakraInput"
                                type="text"
                                label="Student ID"
                                name="studentID"
                            />
                        </Grid>

                        <Grid templateColumns="repeat(1, 6fr)" mt="4" rowGap={6}>
                            <FormikControl
                                control="chakraRadio"
                                label="Gender"
                                name="gender"
                                options={genderOptions}
                            />


                        </Grid>

                        <Grid templateColumns="repeat(2, 6fr)" mt="4" gap={6} rowGap={6}>
                            <FormikControl
                                control="chakraSelect"
                                label="School Year"
                                name="studentLevel"
                                options={levelOptions}
                            />
                            <FormikControl
                                control="chakraSelect"
                                label="department"
                                name="department"
                                options={departmentOptions}
                            />
                        </Grid>
                        <Grid templateColumns="repeat(1, 6fr)" gap={6} mt="4" rowGap={6}>
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
                                            />: null
                            
                        }
                        </Grid>




                        <Button type="submit" variantColor="green" size="lg" mt="4" disabled={!formik.isValid}>Submit </Button>


                    </Form>
                }
            }

        </Formik>
    )
}

export default StudentClassForm
