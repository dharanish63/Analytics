import React from "react";
import HeaderCom from "../Components/HeaderCom";
import LanguagesCom from "../Components/LanguagesCom";
import { AppBar, Box, Container } from "@mui/material";
const Languages = () => {
  return (
    <Box
      style={{
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <AppBar sx={{ backgroundColor: "white" }}>
        <HeaderCom />
      </AppBar>
      <Container sx={{ marginTop: "18vh" }}>
        <LanguagesCom />
      </Container>
    </Box>
  );
};

export default Languages;
