import React from "react";
import { AppBar, Box, Container } from "@mui/material";
import HeaderCom from "../Components/HeaderCom";
import EventCom from "../Components/EventCom";
import Eventdata from "../Components/Eventdata";
const Event = () => {
  return (
    <Box sx={{ width: "100vw", height: "100vh", overflowX: "hidden" }}>
      <AppBar sx={{ backgroundColor: "white" }}>
        <HeaderCom />
      </AppBar>
      <Container sx={{ marginTop: "25vh" }}>
        <EventCom />
      </Container>
    </Box>
  );
};

export default Event;
