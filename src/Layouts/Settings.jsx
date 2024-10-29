import React from "react";
import HeaderCom from "../Components/HeaderCom";
import SettingCom from "../Components/SettingCom";
import { AppBar, Container, Box } from "@mui/material";
const Settings = () => {
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
      <Container sx={{ padding: "15vh" }}>
        <SettingCom />
      </Container>
    </Box>
  );
};

export default Settings;
