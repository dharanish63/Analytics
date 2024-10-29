import React from "react";
import HeaderCom from "../Components/HeaderCom";
import PagesCom from "../Components/PageCom";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import usePagestore from "../stores/Pagestore";
const Pages = () => {
  const { pages } = usePagestore();
  return (
    <Box
      style={{
        height: "100vh",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <AppBar sx={{ width: "100vw", backgroundColor: "white" }}>
        <HeaderCom />
      </AppBar>

      <Container sx={{ marginTop: "30vh" }}>
        <PagesCom pages={pages} />
      </Container>
    </Box>
  );
};

export default Pages;
