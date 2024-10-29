import React from "react";
import HeaderCom from "../Components/HeaderCom";
import ReferrerCom from "../Components/ReferrerCom";
import { AppBar, Box, Container } from "@mui/material";
import useReferrer from "../stores/ReferrerStore";
const Referrer = () => {
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
      <Container sx={{ paddingTop: "16vh" }}>
        <ReferrerCom />
      </Container>
    </Box>
  );
};

export default Referrer;
