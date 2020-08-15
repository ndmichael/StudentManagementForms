import React from 'react'
import { Field } from 'formik'
import { Radio, RadioGroup, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/core'

function ChakraRadio({ label, name, options, ...rest }) {
    return (
        <Field name={name}>
            {
                ({ field, form }) => {
                    return <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                        <FormLabel htmlFor={name}>{label}</FormLabel>
                        <RadioGroup spacing={5} isInline >
                            {
                                options.map(option => {
                                    return <React.Fragment key={option.key}>
                                        <Radio id={option.value} {...rest} {...field} value={option.value} checked={field.value === option.value}>
                                            {option.key}
                                        </Radio>
                                    </React.Fragment>

                                })
                            }
                        </RadioGroup>
                        <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                    </FormControl>
                }
            }
        </Field>
    )
}

export default ChakraRadio
