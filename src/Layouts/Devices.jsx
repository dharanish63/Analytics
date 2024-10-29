import React from "react";
import HeaderCom from "../Components/HeaderCom";
import Devicescom from "../Components/Devicescom";
import { Box, AppBar, Container } from "@mui/material";
const Devices = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <AppBar sx={{ backgroundColor: "white" }}>
        <HeaderCom />
      </AppBar>
      <Container sx={{ paddingTop: "15vh" }}>
        <Devicescom />
      </Container>
    </Box>
  );
};

export default Devices;
