import { Container, Divider, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function SideBar() {
  return (
    <Container >
        <Paper sx={{backgroundColor:'hsl(240, 100%, 5%)',padding:'10px',borderRadius:'0'}} elevation={0}>
            <Box padding={1}>
            <Typography sx={{color:'white',padding:'8px 1rem'}}>
                Hydrogen VS Electric Cars
            </Typography>
            <Typography sx={{color:'hsl(36, 100%, 99%)',padding:'8px 1rem'}} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat assumenda laborum 
                <Divider  sx={{borderColor:'white',marginTop:'10px'}}  />    
            </Typography>
            </Box>
            
           
            <Box padding={1}>
            <Typography sx={{color:'white',padding:'8px 1rem'}}>
                Hydrogen VS Electric Cars
            </Typography>
            <Typography sx={{color:'hsl(36, 100%, 99%)',padding:'8px 1rem'}} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat assumenda laborum 
                <Divider  sx={{borderColor:'white',marginTop:'10px'}}  />    
            </Typography>
            </Box>
            
            <Box padding={1}>
            <Typography sx={{color:'white',padding:'8px 1rem'}}>
                Hydrogen VS Electric Cars
            </Typography>
            <Typography sx={{color:'hsl(36, 100%, 99%)',padding:'8px 1rem'}} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat assumenda laborum 
                <Divider  sx={{borderColor:'white',marginTop:'10px'}}  />    
            </Typography>
            </Box>
        </Paper>
    </Container>
  )
}

export default SideBar