import React from 'react'
import {Box, Text, Link} from '@chakra-ui/core'

function Footer() {
    return (
        <Box mt="25px" bg="#f0f0f0" p="10px" fontSize="14px" textAlign="center">
          <Text >Developed with <Text as="b">React </Text>/ 
            styled with <Text as="b">ChakraUI </Text>/  <br />
            Form Handling with <Text as="b">Formik</Text>/ 
            Validation with <Text as="b">Yup</Text></Text> 
          <Text>&copy; copyright <Link href="https://github.com/ndmichael" fontSize="16px" fontWeight="900px" color="teal" isExternal>Ukeje Micheal</Link></Text>
        </Box>
    )
}

export default Footer
