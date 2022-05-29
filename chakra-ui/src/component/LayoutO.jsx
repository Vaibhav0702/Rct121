
import React from 'react'

import { Flex } from '@chakra-ui/react'

import { Box } from '@chakra-ui/react'

import { Center, Square } from '@chakra-ui/react'

import { Text } from '@chakra-ui/react'
import "./LayoutO.css"

const LayoutO = () => {


    return (
        <>

            <div className='dextop'>
                <h1 className='h1'>Desktop Layout</h1>

                <Flex color='white'>
                    <Square bg='blue.500' size='150px'>
                        <Text>NAV</Text>
                    </Square>
                    <Box flex='1' bg='orange'>
                        <Text>CONTENT</Text>
                    </Box>
                    <Square bg='red' size='150px'>
                        <Text>WIDGET</Text>
                    </Square>

                </Flex>

            </div>


            <div className='mobile'>
                <h1 className='h1'>Mobile Layout</h1>

                <Flex color='white' direction="column" align="center" >
                    <Square bg='blue.500' size='150px'>
                        <Text>NAV</Text>
                    </Square>
                    <Square bg='red' size='150px'>
                        <Text>WIDGET</Text>
                    </Square>
                    <Square size='150px' bg='orange'>
                        <Text>CONTENT</Text>
                    </Square>
                  

                </Flex>

            </div>


        </>
    )
}

export default LayoutO