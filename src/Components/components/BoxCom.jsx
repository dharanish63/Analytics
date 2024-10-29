import React from "react";
import { Typography, Box } from "@mui/material";

const BoxCom = ({ title, children }) => {
  return (
    <Box
      sx={{
        height: "500px",
        width: "500px",
        backgroundColor: "white",
        padding: "30px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "center",
        borderRadius: "10px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 1,
          backgroundColor: "white",
          padding: "0 10px",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          marginTop: "60px",
          height: "calc(100% - 60px)",
          overflowY: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default BoxCom;
