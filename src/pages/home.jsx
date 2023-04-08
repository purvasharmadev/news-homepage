import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Container from "@mui/material/Container";
import SideBar from "../components/SideBar";
import { Grid } from "@mui/material";
import Blogs from "../components/Blog";
import { blog } from "../data";

function Home() {
  return (
    <Container>
      {/*NavBar  */}
      <NavBar />

      {/* Landing Section */}
      <Grid container direction={"row"} marginBottom={3}>
        <Grid item lg={8}>
          <Header />
        </Grid>
        <Grid item lg={4}>
          <SideBar />
        </Grid>
      </Grid>

      {/* Blogs */}
      <Grid container direction={"row"} alignItems={'center'} marginBottom={3}>
        {blog.data.map((item,id) => {
          return (
            <Grid key={id} item lg={4}>
              <Blogs index={item.index} id={id} title={item.heading} paragraph={item.paragraph} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Home;
