

import React from 'react'

import { Grid, GridItem } from '@chakra-ui/react'

import "./LayoutT.css"

const LayoutT = () => {
    return (

        <>


            <div className='dextop'>
                <h1 className='h1'>Desktop Layout</h1>

                <Grid
                    h='400px'
                    templateRows='repeat(5, 1fr)'
                    templateColumns='repeat(3, 1fr)'
                    gap={4}
                >
                    <GridItem rowSpan={3} colSpan={2} bg='mediumpurple' />
                    <GridItem colSpan={1} rowSpan={5} bg='tomato' />
                    <GridItem colSpan={2} rowSpan={2} bg='lightskyblue' />
                    
                </Grid>


            </div>


            <div className='mobile'>
                <h1 className='h1'>Mobile Layout</h1>

                <Grid
                    h='400px'
                    templateRows='repeat(3, 1fr)'
                    templateColumns='repeat(1, 1fr)'
                    gap={4}
                >
                    <GridItem rowSpan={1} colSpan={1} bg='mediumpurple' />
                    <GridItem colSpan={1} rowSpan={1} bg='tomato' />
                    <GridItem colSpan={1} rowSpan={1} bg='lightskyblue' />
                    
                </Grid>


            </div>



        </>


    )
}

export default LayoutT