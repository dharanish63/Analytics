import React from "react";
import { Card, Typography, Box } from "@mui/material";

const GridCom = ({ title, value, label, variant }) => {
  return (
    <Card variant="outlined">
      <Typography variant={variant} sx={{ marginBottom: "3vh" }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
          gap: "10px",
        }}
      >
        <Typography variant="h3">{value}</Typography>
        <Typography variant="h6">{label}</Typography>
      </Box>
    </Card>
  );
};

export default GridCom;
