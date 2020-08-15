import React from 'react'
import ChakraInput from './chakraFormComponents/ChakraInput'
import ChakraTextarea from './chakraFormComponents/ChakraTextarea'
import ChakraSelect from './chakraFormComponents/ChakraSelect'
import ChakraRadio from './chakraFormComponents/ChakraRadio'
import ChakraCheckbox from './chakraFormComponents/ChakraCheckbox'
import ChakraDate from './chakraFormComponents/ChakraDate'

function FormikControl(props) {
    const {control, ...rest} = props
    
    switch(control){
        case 'chakraInput':
            return <ChakraInput {...rest} />
        case 'chakraTextarea':
            return <ChakraTextarea {...rest} />
        case 'chakraSelect':
            return <ChakraSelect {...rest} />
        case 'chakraRadio':
            return <ChakraRadio {...rest} />
        case 'chakraCheckbox':
            return <ChakraCheckbox {...rest} />
        case 'chakraDate':
            return <ChakraDate {...rest} />
         default:
            return null;
    }
}

export default FormikControl
