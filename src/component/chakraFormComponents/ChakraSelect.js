import React from 'react'
import {Field} from 'formik'
import {Select, FormControl, FormLabel, FormErrorMessage} from '@chakra-ui/core'

function ChakraSelect({label, name, options, ...rest}) {
    return (
        <Field name={name}>
            {
                ({field, form}) =>{
                    return <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                        <FormLabel htmlFor={name}>{label}</FormLabel>
                        <Select id={name} {...rest} {...field} size="lg">
                            {
                                options.map(option =>{
                                  return  <option key={option.key} value={option.value}>
                                        {option.key}
                                    </option>
                                })
                            }
                        </Select>
                        <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                    </FormControl>
                }
            }
            
        </Field>
    )
}

export default ChakraSelect
