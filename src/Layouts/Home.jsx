import React from "react";
import Headercom from "../Components/HeaderCom";
import Maincom from "../Components/Maincom";
import { AppBar, Box, Container } from "@mui/material";
const Home = () => {
  return (
    <Box sx={{ width: "100vw", overflowX: "hidden" }}>
      <AppBar sx={{ backgroundColor: "white" }}>
        <Headercom />
      </AppBar>
      <Container sx={{ paddingTop: "10vh", overflowX: "hidden" }}>
        <Maincom />
      </Container>
    </Box>
  );
};

export default Home;
