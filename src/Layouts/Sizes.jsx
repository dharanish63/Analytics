import React from "react";
import HeaderCom from "../Components/HeaderCom";
import SizesCom from "../Components/SizesCom";
import { AppBar, Box, Container } from "@mui/material";
const Sizes = () => {
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
        <SizesCom />
      </Container>
    </Box>
  );
};

export default Sizes;
