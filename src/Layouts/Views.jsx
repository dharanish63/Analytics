import React from "react";
import HeaderCom from "../Components/HeaderCom";
import Viewscom from "../Components/Viewscom";
import useStore from "../stores/Viewstore";
import { AppBar, Box, Container } from "@mui/material";
const Views = () => {
  const { data } = useStore();
  console.log(data);
  return (
    <Box
      style={{
        // height: "100vh",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <AppBar sx={{ backgroundColor: "white" }}>
        <HeaderCom />
      </AppBar>
      <Container sx={{ marginTop: "110px" }}>
        <Viewscom title="Views" key1="date" key2="views" data={data} />
      </Container>
    </Box>
  );
};

export default Views;
