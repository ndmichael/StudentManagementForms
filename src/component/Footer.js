import React from 'react'
import {Box, Text, Link} from '@chakra-ui/core'

function Footer() {
    return (
        <Box mt="5em" bg="teal" p="10px" fontSize="14px" textAlign="center">
          <Text >Developed with <Text as="b">React </Text>/ 
            styled with <Text as="b">ChakraUI </Text>/ 
            Form Handling with <Text as="b">Formik</Text>/ 
            Validation with <Text as="b">Yup</Text></Text> 
          <Text>Released under MiT license on GitHub</Text>
          <Text>&copy; copyright <Link href="https://github.com/ndmichael" fontSize="16px" fontWeight="900px" color="teal.500" isExternal>Ukeje Micheal</Link></Text>
        </Box>
    )
}

export default Footer
