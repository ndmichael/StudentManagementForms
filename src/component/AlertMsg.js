import React from 'react'
import {Grid, Alert, AlertIcon } from '@chakra-ui/core'

const AlertMsg =(props) => {
    console.log("my props", props)
    return (
        <div>
        
                <Grid templateColumns="repeat(1, 10fr)" gap={10} my="5px" rowGap={6}>
                    <Alert status="success">
                        <AlertIcon />
                        Form has been successfully submitted
                    </Alert>
                </Grid> 
            
        </div>
    )
}

export default AlertMsg
