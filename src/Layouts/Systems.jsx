import React from "react";
import HeaderCom from "../Components/HeaderCom";
import SystemsCom from "../Components/SystemsCom";
import { AppBar, Box, Container } from "@mui/material";
import useSystems from "../stores/Systemstore";
const Systems = () => {
  const { systems } = useSystems();
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
        <SystemsCom systems={systems} />
      </Container>
    </Box>
  );
};

export default Systems;
