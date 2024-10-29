import React from "react";
import HeaderCom from "../Components/HeaderCom";
import DurationCom from "../Components/DurationCom";
import useDuration from "../stores/Duration";
import { AppBar, Box, Container } from "@mui/material";

const Durations = () => {
  const { duration } = useDuration();
  console.log("duration", duration);
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
        <DurationCom data={duration} key1="date" key2="duration" />
      </Container>
    </Box>
  );
};

export default Durations;
