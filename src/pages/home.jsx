import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Container from "@mui/material/Container";
import SideBar from '../components/SideBar';
import { Grid } from '@mui/material';

function Home() {
  return (
    <Container>
    <NavBar/>
    <Grid container direction={'row'}>
      <Grid item lg={8}>
      <Header/>
      </Grid>
      <Grid item lg={4}>
      <SideBar/>
      </Grid>
  

    </Grid>
   
    </Container>
  )
}

export default Home