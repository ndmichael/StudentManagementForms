import React from 'react'
import {Grid, Box, Text, Link} from '@chakra-ui/core'

function Header() {
    return (
        <Box bg="teal" color="white" p="5">
            <Box w="100%">
                <Text fontSize="1.5em" fontWeight="700">StudentClassForm</Text>
            </Box>
            <Box textAlign="center">
                <Text>Download</Text>
            </Box>
        </Box>
    )
}

export default Header
