import React from 'react'
import {Field} from 'formik'
import {Textarea, FormControl, FormLabel, FormErrorMessage} from '@chakra-ui/core'


function ChakraTextarea({label, name, ...rest}) {
    return (
        <Field name={name}>
        
            {
               ({field, form}) =>{
                   return <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                        <FormLabel htmlFor={name}>{label}</FormLabel>
                        <Textarea id={name} {...rest} {...field} />
                        <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                        
                   </FormControl>
               }

            }
            
        </Field>
    )
}

export default ChakraTextarea
