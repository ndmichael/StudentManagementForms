import React from 'react'
import { Field } from 'formik'
import { Checkbox, CheckboxGroup,  FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/core'

function ChakraRadio({ label, name, options, ...rest }) {
    return (
        <Field name={name}>
            {
                ({ field, form }) => {
                    return <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                        <FormLabel htmlFor={name}>{label}</FormLabel>
                        <CheckboxGroup spacing={5} isInline >
                            {
                                options.map(option => {
                                    return <React.Fragment key={option.key}>
                                        <Checkbox id={option.value} {...rest} {...field} value={option.value} 
                                            checked={field.value.includes(option.value) }>
                                            {option.key}
                                        </Checkbox>
                                    </React.Fragment>

                                })
                            }
                        </CheckboxGroup>
                        <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                    </FormControl>
                }
            }
        </Field>
    )
}

export default ChakraRadio
