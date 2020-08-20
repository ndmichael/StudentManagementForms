import React from 'react'
import {Box, Text, Button} from '@chakra-ui/core'

function Header() {
    return (
        <Box display={{ md: "flex" }} width={["1/2", "1/2"]} color="white" p={["5px", "20px"]}>
            <Box w="100%">
                <Text fontSize={["1.2em", "1.5em"]} fontWeight="700">StudentClassForm</Text>
            </Box>
            <Box w="100%" textAlign="right" color="#008080">
                 <Button size="sm">Download</Button>
            </Box>
        </Box>
    )
}

export default Header
