
import React from 'react'

import { Grid, GridItem } from '@chakra-ui/react'

import "./LayoutTh.css"

const LayoutTh = () => {
    return (
        <>


            <div className='dextop'>
                <h1 className='h1'>Desktop Layout</h1>
 
                        
                <Grid
                    h='150px'
                    templateRows='repeat(1, 1fr)'
                    templateColumns='repeat(4, 1fr)'
                    gap={4}
                    marginBottom="10px"
                
                >
               
                    <GridItem colSpan={2} rowSpan={1} bg='#fd4'/>
                    <GridItem colSpan={2} rowSpan={1} bg='#fd4' />
                    
                </Grid>

                <Grid
                    h='400px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(3, 1fr)'
                    gap={4}
                >
               
                    <GridItem colSpan={3} rowSpan={1} bg='#f47' />
                    <GridItem colSpan={1} rowSpan={1} bg='mediumslateblue' />
                    <GridItem colSpan={1} rowSpan={1} bg='mediumslateblue' />
                    <GridItem colSpan={1} rowSpan={1} bg='mediumslateblue' />
                    
                </Grid>


            </div>




            <div className='tab'>
                <h1 className='h1'>Tab Layout</h1>
 
                        
                <Grid
                    h='150px'
                    templateRows='repeat(1, 1fr)'
                    templateColumns='repeat(4, 1fr)'
                    gap={4}
                    marginBottom="10px"
                
                >
               
                    <GridItem colSpan={2} rowSpan={1} bg='#fd4'/>
                    <GridItem colSpan={2} rowSpan={1} bg='#fd4' />
                    
                </Grid>

                <Grid
                    h='150px'
                    templateRows='repeat(1, 1fr)'
                    templateColumns='repeat(3, 1fr)'
                    gap={4}
                >
               
                    <GridItem colSpan={3} rowSpan={1} bg='#f47' />
                 
                   
                    
                </Grid>
                 
                <Grid
                    h='150px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(4, 1fr)'
                    gap={4}
                    marginTop="10px"
                
                >
               
                    <GridItem colSpan={4} rowSpan={1} bg='mediumslateblue'/>
                    <GridItem colSpan={4} rowSpan={1} bg='mediumslateblue' />
                    
                </Grid>

            </div>


            <div className='mobile'>
                <h1 className='h1'>Mobile Layout</h1>
 
                <Grid
                    h='400px'
                    templateRows='repeat(6, 1fr)'
                    templateColumns='repeat(1, 1fr)'
                    gap={4}
                >
                    <GridItem colSpan={1} rowSpan={1} bg='#fd4'/>
                    <GridItem colSpan={1} rowSpan={1} bg='#fd4' />
                    <GridItem colSpan={1} rowSpan={2} bg='#f47' />
                    <GridItem colSpan={1} rowSpan={1} bg='mediumslateblue' />
                    <GridItem colSpan={1} rowSpan={1} bg='mediumslateblue' />
                  
                    
                </Grid>


            </div>



        </>
    )
}

export default LayoutTh