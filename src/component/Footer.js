import React from 'react'
import {Box, Text, Link} from '@chakra-ui/core'

function Footer() {
    return (
        <Box mt="5em" bg="teal" p="10px" fontSize="14px" textAlign="center">
          <Text >Developed with <Text as="b">React </Text>/ styled with Chakra/ Form with Formik/ Validation with Yup</Text> 
          <Text>Released under MiT license on GitHub</Text>
          <Text>&copy; copyright Ukeje Micheal</Text>
        </Box>
    )
}

export default Footer
