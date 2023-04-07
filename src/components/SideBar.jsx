import { Container, Divider, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import {sidebar} from "../data"

function SideBar() {
  return (
    <Container >
        <Paper sx={{backgroundColor:'hsl(240, 100%, 5%)',padding:'10px',borderRadius:'0'}} elevation={0}>
            {
                sidebar.text.map((item)=>{
                    return(
<Box padding={1}>
            <Typography sx={{color:'white',padding:'8px 1rem'}}>
                {item.heading}
            </Typography>
            <Typography sx={{color:'hsl(36, 100%, 99%)',padding:'8px 1rem'}} >
               {item.paragraph}
                <Divider  sx={{borderColor:'white',marginTop:'10px'}}  />    
            </Typography>
            </Box>
                    )
                })
            }
            
            
        </Paper>
    </Container>
  )
}

export default SideBar