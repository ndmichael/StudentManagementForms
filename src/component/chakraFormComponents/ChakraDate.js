import React from 'react'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {Field} from 'formik'
import {FormControl, FormErrorMessage} from '@chakra-ui/core'


function ChakraDate({name, label, ...rest }) {
    return (
        <Field name={name}>
            
            {
                ({field, form}) =>{
                    const {setFieldValue}= form
                    const {value} = field
                    return <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                        
                        <label htmlFor={name}>{label}</label>
                        <DateView id={name} {...field} {...rest} selected={value} onChange={val => setFieldValue(name, val)}  />
                        
                        <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                    </FormControl>
                }
            }
        </Field>
    )
}

export default ChakraDate
