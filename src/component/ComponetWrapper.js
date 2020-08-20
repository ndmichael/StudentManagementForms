import React from 'react'
import StudentClassForm from '../component/forms/StudentClassForm'
import {Box} from '@chakra-ui/core'
import Header from './Header'
import Footer from './Footer'

function ComponetWrapper() {

    return (
        <Box m={["20px"]}>
            <Box bg="#008080">
                <Header />
            </Box>    

            <Box p={["5px"]} m={["5px"]}>
                <StudentClassForm />
            </Box>

            <Box>
                <Footer />
            </Box>
            
        </Box>
    )
}

export default ComponetWrapper
